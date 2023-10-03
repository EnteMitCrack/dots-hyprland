// const { Gdk, Vte } = imports.gi;
import { App, Service, Utils, Widget } from '../imports.js';
import { deflisten } from '../scripts/scripts.js';

const WORKSPACE_SIDE_PAD = 0.546; // rem
const NUM_OF_WORKSPACES = 10;
let lastWorkspace = 0;

const GoHyprWorkspaces = deflisten(
    "GoHyprWorkspaces",
    `${App.configDir}/scripts/gohypr`,
    (line) => {
        return JSON.parse(line);
    }
);

const activeWorkspaceIndicator = Widget.Box({
    // style: 'margin-left: -1px;',
    children: [
        Widget.Box({
            valign: 'center',
            halign: 'start',
            className: 'bar-ws-active-box',
            connections: [
                [GoHyprWorkspaces, label => {
                    const ws = GoHyprWorkspaces.state.activeworkspace;
                    if (ws < 0) { // Special workspace (Hyprland)
                        label.setStyle(`
                            margin-left: -${1.772 * (10 - lastWorkspace + 1)}rem;
                            margin-top: 0.409rem;
                        `);
                        // label.label = `+`;
                    }
                    else {
                        label.setStyle(`
                        margin-left: -${1.772 * (10 - ws + 1)}rem;
                        `);
                        // label.label = `${ws}`;
                        lastWorkspace = ws;
                    }
                }],
            ],
            children: [
                Widget.Label({
                    valign: 'center',
                    className: 'bar-ws-active',
                    label: `•`,
                })
            ]
        })
    ]
});

export const ModuleWorkspaces = () => Widget.EventBox({
    onScrollUp: () => Utils.execAsync('hyprctl dispatch workspace -1'),
    onScrollDown: () => Utils.execAsync('hyprctl dispatch workspace +1'),
    onMiddleClickRelease: () => MenuService.toggle('overview'),
    onSecondaryClickRelease: () => Utils.execAsync(['bash', '-c', 'pkill wvkbd-mobintl || wvkbd-mobintl']).catch(print),
    child: Widget.Box({
        homogeneous: true,
        className: 'bar-ws-width',
        children: [
            Widget.Overlay({
                passThrough: true,
                child: Widget.Box({
                    homogeneous: true,
                    className: 'bar-group-center',
                    children: [Widget.Box({
                        className: 'bar-group-standalone bar-group-pad',
                    })]
                }),
                overlays: [
                    Widget.Box({
                        style: `
                        padding: 0rem ${WORKSPACE_SIDE_PAD}rem;
                        `,
                        children: [
                            Widget.Box({
                                halign: 'center',
                                // homogeneous: true,
                                children: Array.from({ length: NUM_OF_WORKSPACES }, (_, i) => i + 1).map(i => Widget.Button({
                                    onPrimaryClick: () => Utils.execAsync(`hyprctl dispatch workspace ${i}`).catch(print),
                                    child: Widget.Label({
                                        valign: 'center',
                                        label: `${i}`,
                                        className: 'bar-ws txt',
                                    }),
                                })),
                                connections: [
                                    [GoHyprWorkspaces, box => {
                                        if (!GoHyprWorkspaces.state)
                                            return;
                                        const wsJson = GoHyprWorkspaces.state;
                                        const kids = box.children;
                                        kids.forEach((child, i) => {
                                            child.child.toggleClassName('bar-ws-occupied', false);
                                            child.child.toggleClassName('bar-ws-occupied-left', false);
                                            child.child.toggleClassName('bar-ws-occupied-right', false);
                                            child.child.toggleClassName('bar-ws-occupied-left-right', false);
                                        });

                                        for (const ws of wsJson.workspaces) {
                                            const i = ws.id;
                                            const thisChild = kids[i - 1];
                                            const isLeft = !ws?.leftPopulated && wsJson.activeworkspace != i - 1;
                                            const isRight = !ws?.rightPopulated && wsJson.activeworkspace != i + 1;
                                            thisChild?.child.toggleClassName(`bar-ws-occupied${isLeft ? '-left' : ''}${isRight ? '-right' : ''}`, true);
                                        };
                                    }],
                                ],
                            }),
                            activeWorkspaceIndicator,
                        ]
                    })
                ]
            })
        ]
    })
});

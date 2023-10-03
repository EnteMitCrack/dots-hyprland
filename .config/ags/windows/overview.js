import { Widget } from '../imports.js';
import { SearchAndWindows } from "../modules/overview.js";

export const overview = Widget.Window({
    name: 'overview',
    exclusive: false,
    focusable: true,
    popup: true,
    anchor: ['top'],
    layer: 'overlay',
    child: Widget.Box({
        vertical: true,
        children: [
            SearchAndWindows(),
        ]
    }),
})

<div align="center">
    <h1>【 end_4's Hyprland dotfiles 】</h1>
    <h3></h3>
</div>

<div align="center">

![](https://img.shields.io/github/last-commit/end-4/dots-hyprland?&style=for-the-badge&color=FFB1C8&logoColor=D9E0EE&labelColor=292324)
![](https://img.shields.io/github/stars/end-4/dots-hyprland?style=for-the-badge&logo=andela&color=FFB686&logoColor=D9E0EE&labelColor=292324)
[![](https://img.shields.io/github/repo-size/end-4/dots-hyprland?color=CAC992&label=SIZE&logo=googledrive&style=for-the-badge&logoColor=D9E0EE&labelColor=292324)](https://github.com/end-4/hyprland)
</a>

</div>

# ✨ Cool stuff
 <details open> 
  <summary>Notable features</summary>
    
  - An overview widget that shows window positions in workspaces + app search (GNOME overview replacement)
  - `hybrid` branch: Can toggle Windows 11-like mode hehee
</details>
<details open> 
  <summary>Details</summary>
    
  - Pywal and [Material You](https://m3.material.io/styles/color/the-color-system/key-colors-tones) colors
  - Sexy animations
  - The latest branch, [m3ww](https://github.com/end-4/dots-hyprland/tree/m3ww), can be scaled and supports both light and dark theme properly!
</details>
 <details> 
  <summary>Bragging</summary>
     
   - [`hybrid`](https://github.com/end-4/dots-hyprland/tree/hybrid) branch is featured in [Athena OS](https://www.athenaos.org/en/configuration/hyprland/) 
   - [`summer-gruv`](https://github.com/end-4/dots-hyprland/tree/summer-gruv) branch is the winner of Hyprland ricing competition Summer 2023. Now featured in the [Hyprland repo](https://github.com/hyprwm/hyprland#gallery) and [Hyprland Wiki](https://wiki.hyprland.org/Configuring/Example-configurations/)
   - [`windoes`](https://github.com/end-4/dots-hyprland/tree/windoes) branch received a "Tasty rice" flair [on r/unixporn](https://www.reddit.com/r/unixporn/comments/13zdhqd/hyprland_windows_rice_with_too_much_eww_with_blur/)
</details>

# 👀 Styles

_Click the images for a video showcase with animations!_

### [m3ww](https://github.com/end-4/dots-hyprland/tree/m3ww)
   <a href="https://streamable.com/85ch8x">
    <img src="./assets/m3ww.png" alt="Material Eww!">
   </a>

### [NovelKnock](https://github.com/end-4/dots-hyprland/tree/novelknock)
   <a href="https://streamable.com/7vo61k">
    <img src="./assets/novelknock-yellow.png" alt="Desktop Preview">
   </a>

### [Hybrid](https://github.com/end-4/dots-hyprland/tree/hybrid)
   <a href="https://streamable.com/4oogot">
    <img src="./assets/screenshot-hybrid.png" alt="Desktop Preview">
   </a>

### [Windoes](https://github.com/end-4/dots-hyprland/tree/windoes)
   <a href="https://streamable.com/5qx614">
    <img src="./assets/windoes-3.png" alt="Desktop Preview">
   </a>

- For older and insignificant styles, check the releases

---

# 🔧 General instructions
 - Make sure you follow these general steps then steps in the readme of your interested branch if there are any
 - **_A guided install script exists, but very incomplete. I recommend against using it._**
 - **Backup**
 - Copy
   - `Pictures`, `.config`, `.local` to home folder
   - Stuff in `Import manually` folder if you need them
 - Install dependencies
   - See the list in the Dependencies section
   - Get "Plasma browser integration" extension for your browser
   - Run `usermod -aG video <USERNAME>` for brightness control to work
 - Install proprietary font: Segoe UI Variable (for windoes and hybrid branch)
 - **For ARM users**: Compile .cpp scripts in `~/.config/eww/scripts/` (to that folder) (like this: `g++ ~/.config/ewwscripts/SCRIPTNAME.cpp -o ~/.config/eww/scripts/SCRIPTNAME`)
 
# 🎨 eww (yes I spend too much time on this)
 ## Performance
|  ⌄  | Do use | Not recommended | Notes                 |
| --- | ------ | ----------- | ------------------------- |
| Kernel |     | cachyos            | Don't abuse power savers! |
| Login shell  | bash/zsh | fish | It's okay to use fish in a terminal - that's what I do |

 ## Setup
 - This eww config only works properly in `~/.config/eww`
 - Start eww with `eww daemon`
 - To open the top bar, run `eww open bar`
 - To open the Windows bar, run `eww open winbar` (`windoes`/`hybrid` branch)
 - To open the bottom line, run `eww open bottomline` (so that the music window opens if you click the bottom edge of the screen)
 - Open the overview and wait 10 seconds (for it to generate app search cache, or icons won't show properly)
 ## Usage
 - Music controls: Middle-click for Play/Pause, Right-click for Next track, scroll to change volume
 - To open the Overview, middle/right-click the workspace indicators or run `eww open overview`
 - You can type to search in overview!
 ## Search
 - Type normally to search apps
 - Type something beginning with a number and it'll be calculated (`qalc` is used for backend)
 - `>save THEME`: Saves current colorscheme, with THEME as the name.
 - `>load THEME`: Loads a saved theme. Available themes will be shown as you type.
 - `>music`: Get colorscheme from current media thumbnail
 - `>wall`: Get colorscheme from wallpaper located in `~/.config/eww/images/wallpaper/wallpaper` (might take quite a while)
 - `>light`: Remember to use light mode for next color generations
 - `>dark`: Remember to use dark mode for next color generations
 - `>one`: Remember to use only one color for bar icons for next color generations
 - `>multi`: Remember to use many colors for bar icons for next color generations
 - `>r`: Reload (kills and relaunches eww with the default bar)

# 📦 Dependencies
 - Missing something? Please tell me. Thanks!
 - Python dependencies
```
[ Command ]
pip install pywal desktop_entry_lib poetry build Pillow
```
 - Normal dependencies
```
[ Possible package names (normal stuff) ]
bc blueberry bluez boost boost-libs coreutils dunst findutils fzf gawk gnome-control-center ibus imagemagick libqalculate light networkmanager network-manager-applet nlohmann-json pavucontrol plasma-browser-integration playerctl procps ripgrep socat sox udev upower util-linux xrandr wget wireplumber yad
[ Command for: Fedora (INCOMPLETE command; so there's less name hunting for you) ]
sudo dnf install bc blueberry bluez coreutils dunst findutils gawk gojq ImageMagick light NetworkManager network-manager-applet pavucontrol plasma-browser-integration playerctl procps ripgrep socat udev upower util-linux wget wireplumber wlogout qalc sox nlohmann-json-devel
```
- AUR Packages (ughhh why not arch?) (check their AUR pages and check the Upstream URL for their repos)
```
[ yay as AUR helper ]
yay -S cava geticons gtklock gtklock-playerctl-module gtklock-powerbar-module gtklock-userinfo-module python-material-color-utilities swww gojq wlogout hyprland-git eww-wayland-git
```
 - Stuff that you might wanna install if you didn't start as a lazyass on EndeavourOS+Gnome like me (install these if you decide to use my hyprland.conf)
```
gnome-keyring polkit-gnome 
```

 - Other stuff that I use, mostly utilities (you can skip these)
```
tesseract cliphist grim slurp fuzzel
```
---

# 🙏 Attribution
 - Thank you fufexan (who also thanks a lot more people) for their guidance and eww config: https://github.com/fufexan/dotfiles (very clean implementation, my config is based on this)
 - Thanks to the people at the Hypr Development Discord for their inspiration
 - Bing AI for helping me code like 80% of the C++ functions lmao
 - Maybe more, but I might not remember them all.. Still, thanks.

# 🌟 Stars
- _A star really makes my day! Thanks!_

[![Stars](https://starchart.cc/end-4/dots-hyprland.svg)](https://starchart.cc/end-4/dots-hyprland)

# 💡 Some inspirations
 - osu!lazer, Windows 11, Material Design 3, AvdanOS (concept)


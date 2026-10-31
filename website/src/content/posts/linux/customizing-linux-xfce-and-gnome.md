---
title: "Customizing Linux: The XFCE and GNOME Edition"
description: "How to customize Linux with themes, effects, panels and a boot screen. XFCE in detail, GNOME in general, and the macOS look as an example."
pubDate: 2026-11-02
category: Tooling
tags: [linux, customization, xfce, gnome, plymouth]
author: Abu
difficulty: beginner
draft: true
demo: false
---

*Written by Abu and refined with AI.*

A quick note before we start: this is my recommendation, and I beg you not to follow it to the dot. This is your system, so customize it however you want. I am only making it easier. I have customized XFCE the most, so that is where most of this guide goes into detail. The GNOME tips are more general, and the same ideas work on most desktops.

## Step 1: Download a theme

A theme changes how your windows, buttons, and menus look. One popular choice, especially if you like the macOS look, is the WhiteSur theme. It comes as a GTK theme, an icon pack, and a cursor set, so you can match everything.

Download a theme and put it somewhere your system can find it. For your own user, that is `~/.themes` (the older location) or `~/.local/share/themes` (the newer one). For every user on the computer, use `/usr/share/themes`. Icons go in `~/.icons` or `~/.local/share/icons` in the same way.

Then enable it. On XFCE, open Appearance for the app theme and icons, and Window Manager for the window borders, since XFCE sets the two separately. On GNOME, you use GNOME Tweaks or the Appearance settings.

## Step 2: Effects

This is a bit premature, but it is my favorite part of Linux. What you can do depends on whether you run Wayland or X11, and the two use different tools.

On Wayland, use Hyprland.
On X11 (X.Org), use Compiz together with Cortile, and Emerald if you find it necessary.

Hyprland is a full compositor, which means it replaces your window manager, so it is a whole desktop on its own and not an add-on. Compiz only works on X11, and on XFCE it replaces the default window manager, so turn off the built-in compositor to avoid clashes. Cortile is an auto-tiling tool for X11.

Mess around in those settings. I will note the Compiz settings, since I use X.Org. The effects to try are wobbly windows, 3D windows, the rotating cube, window decorations, and animations, if you have some time to make everything look very neat.

## Step 3: Panels on XFCE

On XFCE, install Plank or the Docklike Taskbar, and make as many panels as you want. I recommend two: one for a dock and one for a top menu.

Add your apps as launchers. If you can't find an app, search for other customizations to match your look. I also recommend shortening the panels so they don't stretch across the whole screen. For the top panel, make it frosted (a light, semi-transparent background) or fully transparent. This is a see-through effect and not a true blur, which needs extra software.

## Step 4: Customizing GNOME (Ubuntu)

I used GNOME through Ubuntu, so this is what I did there. I installed the WhiteSur theme, and I changed the desktop settings that Ubuntu gives you, like the dock and the appearance options. GNOME is more locked down than XFCE, so you can do less out of the box, but tools like GNOME Tweaks and the Extensions app open it up. Tweaks lets you change fonts, themes, icons, and the title bar buttons, and extensions add things like a custom dock, a global menu, and a custom top bar.

To be honest, I did far more customization on Arch in a few hours than I did in months on Ubuntu. The steps I used on GNOME were general, though: a theme, an icon pack, a cursor, a font, and a wallpaper. They work almost anywhere, so you can carry the same look from one desktop to another.

## Step 5: Change your boot screen with Plymouth

Plymouth is the boot splash, the screen that shows while your system starts. I run a macOS Plymouth theme, so my computer shows the Apple logo and a loading bar before boot. Combined with the WhiteSur theme, the macOS traffic light buttons, and a global menu on the desktop, everything feels like one system.

The theme I use is [mac-plymouth by fathyar](https://github.com/fathyar/mac-plymouth). Below are the steps for Ubuntu, Debian and Fedora. Plymouth comes preinstalled on Ubuntu and Fedora, but Debian may need it installed.

First, for every distro, download the theme and copy its `mac` folder into Plymouth's themes folder:

```bash
git clone https://github.com/fathyar/mac-plymouth
sudo cp -r mac-plymouth/mac /usr/share/plymouth/themes/
```

If git is missing, install it first with `sudo apt install git` or `sudo dnf install git`.

### On Ubuntu and Debian

1. On Debian, install Plymouth: `sudo apt install plymouth plymouth-themes`
2. Register the theme:

   ```bash
   sudo update-alternatives --install /usr/share/plymouth/themes/default.plymouth default.plymouth /usr/share/plymouth/themes/mac/mac.plymouth 100
   ```

3. Select it with `sudo update-alternatives --config default.plymouth`, then type the number next to the mac theme.
4. Rebuild the boot image: `sudo update-initramfs -u`
5. On Debian only, make sure `quiet splash` is in the `GRUB_CMDLINE_LINUX_DEFAULT` line in `/etc/default/grub`, then run `sudo update-grub`. Ubuntu already has this by default.
6. Reboot.

### On Fedora

1. List your themes with `sudo plymouth-set-default-theme -l`. You should see mac in the list.
2. Select it and rebuild the boot image in one go: `sudo plymouth-set-default-theme mac -R`
3. Reboot.

Be careful, because a mistake in the boot files can stop your system from booting. Keep a live USB ready, and if something looks wrong, undo your changes from a live session. Plymouth themes are cosmetic, so if the boot screen looks odd, switch back to another theme the same way.

## Step 6: Stay safe while you experiment

Customizing can break things. Before you start, back up your `~/.config` folder, so you can undo your changes. If something goes wrong, restore the folder or log in as a fresh user to get a working desktop back.

*Next in the series: we start looking inside Linux itself.*

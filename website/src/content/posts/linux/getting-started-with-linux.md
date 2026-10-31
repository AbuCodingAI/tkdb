---
title: "Getting Started with Linux"
description: "A beginner's guide to switching to Linux: choosing a distro, making a bootable USB, installing, and dual booting, in the order you will actually do it."
pubDate: 2026-11-01
category: Tooling
tags: [linux, beginners, install, dual boot]
author: Abu
difficulty: beginner
draft: true
demo: false
---

*Written by Abu and refined with AI.*

Not liking Windows or macOS anymore? Here is everything you need to make the switch, in the order you will actually do it.

Linux is free, fast, and yours to shape however you like. It is also not all rainbows and sunshine. There are a few real steps, and one or two of them can cost you your files if you rush. This is the first post in the Linux Internals series, so we start with the practical part: getting Linux onto your computer. The internals come in the posts that follow.

## What you need

A USB drive of 8 GB or larger, which will be erased, a backup of anything you care about, and about an hour. This guide is written for people coming from Windows or macOS. I will point out which steps apply to a dual boot, where Linux lives next to your old system, and which apply if you replace it completely.

## Step 1: Choose your Linux

There is no single Linux the way there is one Windows or one macOS. There are thousands of versions, called distributions, or distros for short. Some are friendly to beginners, some feel like a drop-in replacement for Windows, and some make you build the whole system yourself, which is not fun on day one.

I have been using Linux for several months. I started on Ubuntu in March and switched to Arch last month. For a first distro I would pick Ubuntu, Linux Mint, or Fedora. I have run Fedora in virtual machines and loved it, because it is polished and up to date. If you have a Mac with Apple silicon, Asahi Linux (Fedora Asahi Remix) is the one to try. I would hold off on Arch and Alpine for now. Arch is my daily system today, but I only moved to it after several months on Ubuntu.

## Step 2: Know the drawbacks

Linux does have drawbacks. Some apps and hardware need extra work, although most issues have a fix. Some games with anti-cheat protection do not run, and a few apps are simply missing.

You do not have to give everything up, though. If you play it smart, you can keep your main system and dual boot. If you are replacing your old system, or you do not have the storage for both, you will probably still be fine. Minecraft runs on Linux, and many Windows games run through Steam's Proton or Wine, including Geometry Dash. WhatsApp's website now supports calling, so you do not need the desktop app. Google Chrome has a Linux version, and most other tools have free or open source alternatives.

## Step 3: Make a bootable USB

This is the step people call burning the ISO. You write the distro's ISO file to your USB drive. On Windows, use Rufus. On Linux or a Mac, use Balena Etcher, and Fedora users can use Fedora Media Writer.

If you plan to dual boot with Windows, do these things first. Back up your files. Shrink your Windows partition from inside Windows using Disk Management, so there is free space for Linux. Turn off Fast Startup. If BitLocker is on, make sure you have your recovery key.

Now restart and boot from the USB. Press your boot menu key, which is usually F12, Esc, F9, or F10, and pick the USB drive. If it does not show up, open your BIOS or UEFI settings (often F2 or Del), go to the boot options, enable or add the USB entry, and move it to the top of the order. If your PC still refuses to boot it, Secure Boot may be in the way.

## Step 4: The live environment

If the USB booted correctly, you land in a live environment. This is a full desktop you can try without installing anything, so it is a good time to check that your Wi-Fi, sound, and display work.

Beginner-friendly distros show an Install icon on the desktop. Click it and follow the steps. For a dual boot, install into the free space you made earlier. For a full replacement, you will erase the disk.

Read every option carefully. One click on the wrong choice wipes your files and everything on your old system. If you are not sure, stop and check before you continue.

## Step 5: Install your everyday software

You will use this as your system every day, so set it up. Many distros include Firefox, and Chrome is available for Linux if it is what you already use. Install VLC if you want a media player that plays everything.

Learn your update commands early. On Debian and Ubuntu, run `sudo apt update && sudo apt upgrade`. On Fedora, run `sudo dnf upgrade`. On Arch, run `sudo pacman -Syu`.

Other useful tools are Wine, which runs some Windows programs (not all of them), VS Code, and efibootmgr if you kept Windows and want to manage your boot entries.

## Step 6: Make it yours

There will be a separate guide to customization, but please do not follow it to the dot. Make your system look however you wish, and search for how to get the look you want, because almost anything is possible.

My own computer shows the macOS logo and a loading bar before boot, has the macOS traffic light buttons, and has a global menu. You are not restricted.

## Step 7: Boot into Windows from GRUB (dual boot only)

GRUB is the boot menu that lets you choose between Linux and Windows. Most distros detect Windows and add it for you. If yours does not, you add a boot entry yourself. Avoid editing `grub.cfg` directly, because it gets regenerated when the system updates. Change the GRUB settings file and regenerate the configuration instead. The exact steps depend on your distro, so check its documentation first. Think of it as an inauguration ceremony. Congratulations, it is your system now!

## Step 8: Enjoy it

Live in peace knowing that whatever you need, there is almost certainly a free Linux alternative waiting for you.

*Next in the series: customizing your desktop, and then we start looking inside Linux itself.*

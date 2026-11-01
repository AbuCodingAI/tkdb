---
title: "50 Commands Every Linux User Needs to Know"
description: "Fifty Linux commands, each with a one-line explanation, an example and a safety note where it matters, from sudo and chmod to grep."
pubDate: 2026-10-31
category: Tooling
tags: [linux, beginners, commands, terminal]
author: Abu
difficulty: beginner
draft: false
demo: false
---

*Written by Abu and refined with AI.*

The terminal is where Linux gets really powerful, but it only helps if you know what to type. Here are 50 commands worth learning, grouped so you can skip around. Each has a short explanation and an example you can copy.

A quick warning first: a few of these can delete files or break your system if you mistype them. Those have a **Careful** note. When you are not sure what a command does, read its manual first with `man <command>`.

## General Linuxes

These apply to all Linuxes.

1. **`sudo`**, an obvious pick, runs a command with root (admin) rights. Example: `sudo nano /etc/hosts`
2. **`su -`**, switches you to a root shell, and unlike `sudo` it doesn't time out. It asks for root's password, and on some distros (like Ubuntu) root is locked by default. Example: `su -`. **Careful:** everything you type in a root shell runs with full power, so type `exit` when you are done.
3. **`cat`**, from inspecting files to creating them, does way more than its original job of concatenating. Example: `cat notes.txt` shows a file, and `cat a.txt b.txt > all.txt` joins two files.
4. **`nano`**, a file editor for quick file inspection and editing. Example: `nano notes.txt`, then Ctrl+O to save and Ctrl+X to exit.
5. **`xdg-open`**, opens a file or link (HTML files, PDFs, URLs) in your default app. Example: `xdg-open index.html`
6. **`ls`**, lists all files and folders in the directory. Example: `ls -a` also shows hidden files.
7. **`pkill`**, ends a process by name. Example: `pkill firefox`. **Careful:** it can close the wrong program if the name matches more than one.
8. **`chmod`**, with its variations, is one of the most powerful commands: it changes who can read, write or run a file. Example: `chmod 755 script.sh`. **Careful:** never run `chmod -R 777` on a folder, because it gives everyone full access, and `chmod -R` on system folders can break your system.
9. **`chroot`**, changes your root directory, useful for certain builds and for rescuing a broken install. Example: `sudo chroot /mnt /bin/bash`. **Careful:** run it on the wrong folder and you will be working in a place that looks like your system but isn't.
10. **`man`**, the manual for Linux tools. Example: `man ls`, and press `q` to quit.

## Might need to install

11. **`inxi -F`**, shows information about your computer. Example: `inxi -F`
12. **`btop`**, a task manager right in the terminal. Example: `btop`
13. **`fastfetch`**, a nicer, more compact version of `inxi`. Example: `fastfetch`
14. **`ncdu`**, scans directories and sorts them by size in a list, great for finding what is eating your disk. Example: `ncdu ~`
15. **`tldr`**, simplified, better version of man pages. Example: `tldr tar`
16. **`nvtop`**, monitors GPU and VRAM usage. Example: `nvtop`
17. **`fzf`**, a fuzzy finder for files or commands. Example: `history | fzf` lets you search your command history as you type.
18. **`lsof -i`**, lists all open network connections to show exactly which apps are connected to the internet. Example: `sudo lsof -i`
19. **`7z`**, unzips archives beautifully. Example: `7z x archive.zip`
20. **`eza`**, `ls` but more colorful, and it shows file sizes. Example: `eza -l`

## Distro based

These depend on which distro you use, so use the one that matches yours.

21. **`pacman`**, installs packages on Arch. Example: `sudo pacman -S firefox`
22. **`yay`**, an AUR helper for Arch. Example: `yay -S spotify`. **Careful:** AUR packages are made by users, so check what you install.
23. **`apt`**, installs packages on Debian-based OSes. Example: `sudo apt install vlc`
24. **`dnf`**, the Fedora package manager. Example: `sudo dnf install vlc`
25. **`update-grub`**, updates the GRUB boot menu on Debian-based OSes. Example: `sudo update-grub`
26. **`systemctl`**, controls services on any OS that uses systemd. Example: `systemctl status NetworkManager`, or `sudo systemctl restart NetworkManager`
27. **`update` / `upgrade` / `-Syu`**, updates your distro with your package manager. Examples: `sudo apt update && sudo apt upgrade` on Debian, `sudo dnf upgrade` on Fedora, and `sudo pacman -Syu` on Arch.
28. **`yast`**, the openSUSE system-wide manager. Example: `sudo yast`
29. **`apk`**, the Alpine package manager. Example: `sudo apk add vim`
30. **`plymouth-set-default-theme`**, changes your boot splash (Plymouth) theme on Fedora. Example: `plymouth-set-default-theme -l` lists themes, and `sudo plymouth-set-default-theme spinner -R` applies one and rebuilds the boot image. **Careful:** a mistake here can affect booting, so make sure you have a way to recover.

## Honourable mentions

31. **`mkdir`**, creates a directory (`rmdir` removes an empty one). Example: `mkdir -p projects/linux/notes` also creates the parent folders.
32. **`chown`**, changes who owns a file or folder, and pairs with `chmod`, so every Linux user should know both. Example: `sudo chown abu:abu notes.txt`. **Careful:** like `chmod`, be very careful with `-R` on system folders.
33. **`touch`**, creates a file. Example: `touch notes.txt`
34. **`vim`**, a terminal editor that is keybind based, powerful once you learn it. Example: `vim notes.txt`, then `:wq` to save and quit, or `:q!` to quit without saving.
35. **`fsck`**, checks your drive for errors. Example: `sudo fsck /dev/sdb1`. **Careful:** only run it on a drive that is not mounted, or you can corrupt your data.
36. **`lsusb`**, lists all USB devices. Example: `lsusb`
37. **`lsblk`**, lists all drives and partitions. Example: `lsblk -f` also shows the filesystems and UUIDs.
38. **`mv`**, moves a file or folder to a location, and also renames it. Example: `mv notes.txt ~/Documents/`
39. **`cp`**, copies a file or folder to a location. Example: `cp -r projects projects-backup`
40. **`cd`**, changes directory. Example: `cd ~` goes home, and `cd ..` goes up one level.

## Variations

41. **`ls -l`**, shows permissions, owners and sizes. Example: `ls -l`
42. **`chmod +x`**, makes a file executable. Example: `chmod +x script.sh`, then run it with `./script.sh`.
43. **`nano -l`**, shows line numbers. Example: `nano -l script.sh`
44. **`nano ~/.bashrc`**, edits your bashrc, the file that runs every time you open a terminal. Example: `nano ~/.bashrc`
45. **`source ~/.bashrc`**, applies your bashrc changes without reopening the terminal. Example: `source ~/.bashrc`
46. **`chmod -w`**, makes a file read-only. Example: `chmod -w notes.txt`
47. **`chmod +w`**, makes a file writable. Example: `chmod +w notes.txt`
48. **`rm -rf`**, removes forcefully and recursively. Example: `rm -rf old-project`. **Careful:** there is no undo and no recycle bin, so double-check the path. Never run it with `/` or `~`, or with a path you built from a variable that might be empty. Want an undo? Use `gio trash old-project` instead, which moves it to the Trash so you can restore it.
49. **`grep -v`**, excludes matches from the results. Example: `ls | grep -v ".txt"` lists everything except text files.
50. **`grep -i`**, case-insensitive search. Example: `grep -i error /var/log/syslog`. On Fedora or Arch, use `journalctl | grep -i error` instead, since there is no `/var/log/syslog` by default.

## Where to go next

You don't need to memorize all 50. Start with `ls`, `cd`, `cat`, `nano`, `sudo` and `man`, and look the others up when you need them. `tldr` is great for that.

---
title: "Inside Linux: 10 Files Every User Should Know"
description: "Ten files that tell you how your Linux system works: what each one does, which you edit, and which you only read."
pubDate: 2026-10-31
category: Tooling
tags: [linux, beginners, files, configuration]
author: Abu
difficulty: beginner
draft: false
demo: false
---

*Written by Abu and refined with AI.*

Linux is built out of files, and a handful of them tell you almost everything about how your system works. Here are 10 worth knowing. Some you will edit, and some you will only read.

A quick warning first: back up a file before you change it (for example, `sudo cp /etc/fstab /etc/fstab.bak`). A small mistake in some of these can stop your system from booting.

## 1. `/etc/fstab`

This lists the partitions that get mounted at boot. If you want a drive to mount automatically every time you start up, you add a line for it here. Use the partition's UUID (find it with `lsblk -f`) instead of a name like `/dev/sdb1`, because those names can change. After editing, run `sudo mount -a` to test your changes before you reboot.

## 2. `/etc/os-release`

This is your system's identity card: the name, version and ID of your distro. You can edit it and make your system call itself Windows 11 or macOS Sequoia, but be careful. Scripts and installers read this file to decide what to do, and some won't recognize your distro anymore. On many systems an update can also overwrite your change.

## 3. `/etc/hosts`

This is a small, local lookup table that matches hostnames to IP addresses, and your computer checks it before asking a DNS server. The first line you will usually see is `127.0.0.1 localhost`, which is how your computer refers to itself. You can also add your own names here, or point a website's name to a different address to block it.

## 4. `~/.bashrc`

This is my favorite file ever. It runs every time you open a terminal, so it is where you make your own aliases, commands and terminal intros. Bash is the default shell on most Linux distros. macOS uses zsh by default, so there the file is `~/.zshrc`. Here is a sample from my own `.bashrc`:

```bash
command_not_found_handle() {
    echo "$1: command not found 😭😭"
    return 127
}
```

Run `source ~/.bashrc` after editing to apply your changes without reopening the terminal.

## 5. `/etc/sudoers.d/`

This is a directory of small files that control who can use sudo and how. It is mostly used to automate things, for example letting one script run a single command as root without asking for a password. Always edit these with `sudo visudo -f /etc/sudoers.d/<name>` and never with a plain text editor, because a typo can lock you out of sudo entirely. sudo exists for a reason, so change this with caution.

## 6. `/etc/passwd`

This lists every user account on the computer: the username, user ID, home folder and default shell. Despite the name, it does not hold passwords. Those are kept, hashed, in `/etc/shadow`, which only root can read. It is worth a read to understand how Linux sees its users.

## 7. `/sys`

This is a virtual directory where the kernel exposes information about your hardware and drivers: batteries, temperatures, brightness, network cards and more. Many of these files can be read, and some can be written to in order to change settings. It is very useful when you want to know what your hardware is doing.

## 8. `/proc/cpuinfo`

I learned about this one while researching this blog. It shows live information about your processor: the model, the speed in MHz, the cache size, the address sizes and more. It is not a real file on disk. The kernel generates it each time you read it, as it does for everything in /proc. Try `cat /proc/cpuinfo`.

## 9. `/proc/meminfo`

This is the raw data behind tools like `free`, `top` and `btop`. It lists your total, free and available memory, the cache, swap in use, the amount of data waiting to be written to disk (the Dirty line), and a lot more. It is like the memory summary at the top of btop or top, with no list of programs, and it is great for seeing exactly where your memory is going.

## 10. `/etc/default/grub`

This holds the settings for GRUB, the boot menu that appears when your computer starts (on systems that use GRUB). It controls how long the menu waits (GRUB_TIMEOUT), which entry is the default, and the options passed to the kernel at boot (GRUB_CMDLINE_LINUX_DEFAULT). It is also where you add things like `quiet splash`. Editing this file does nothing on its own: after you change it you must apply the changes with `sudo update-grub` on Ubuntu and Debian, or `sudo grub2-mkconfig -o /boot/grub2/grub.cfg` on Fedora. Edit this file, and never `grub.cfg` directly, because `grub.cfg` is regenerated from it. A typo here can stop your computer from booting, so back it up first.

Final note: explore `/etc` for more of these interesting files, and look around other directories too, because in Linux you can explore everything. Just read before you write, and keep a backup.

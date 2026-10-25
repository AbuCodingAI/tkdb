---
title: "Demo: reading /proc and /sys like a map"
description: "A demonstration tutorial post showing the Tutorial template with prerequisites, a table of contents and code."
pubDate: 2026-10-20
category: Kernel
tags: [proc, sysfs, demo]
difficulty: beginner
prerequisites:
  - A Linux shell
  - Curiosity about what the kernel exposes
featured: true
demo: true
---

> **This is a demonstration post.** It exists to show how the Tutorial template looks. Replace it with real writing.

## What are /proc and /sys?

The kernel exposes live information as files. Reading them needs no special tools.

## Look at the CPU

```bash
head -n 5 /proc/cpuinfo
cat /proc/loadavg
```

## Look at a block device

```bash
ls /sys/block
cat /sys/block/*/queue/scheduler
```

## Why this matters

Everything a monitoring tool shows you comes from these files, so you can script it yourself.

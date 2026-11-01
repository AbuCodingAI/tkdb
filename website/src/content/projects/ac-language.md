---
title: "AC (AbuCompiled)"
description: "A high-level, indentation-based language that compiles to Python, JavaScript, C, Rust, Go, native binaries and more, from one source file."
status: in-development
languages: [C++, AC]
github: "https://github.com/AbuCodingAI/aclang"
featured: false
tags: [compiler, programming-language, linux]
---

AC (AbuCompiled) is a high-level, indentation-based, multi-target compiled language. You write a program once and compile it to any of twelve backends, plus an experimental AArch64 backend. It is close to its first release.

## How it works

The compiler lexes AC source into an AST, lowers it to a unified intermediate representation, runs optimization passes, and then emits the target you choose. The compiler itself is written in C++17 and runs on Linux, macOS and Windows.

## Targets

Text backends include Python, JavaScript, HTML, C, C++, Java, Rust, Go and V, and there is x86-64 assembly output. AC also has its own native x86-64 backend (BNY) that needs no external toolchain, and an experimental AArch64 backend. A separate library target builds shared libraries.

## A first program

```ac
AC->PY

<mainloop>
    Term.display $Hello, AC$
<mainloop>
```

The first line picks the backend, and every program needs a `<mainloop>` or a `<StartHere>`/`<EndHere>` block.

## Try it

```bash
git clone https://github.com/AbuCodingAI/aclang.git
cd aclang
./install.sh
```

AC is free software under the GNU General Public License, version 3. See the [repository](https://github.com/AbuCodingAI/aclang) for the full language reference, the examples and the standard libraries.

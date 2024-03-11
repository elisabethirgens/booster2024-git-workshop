---
title: Config your Git ⚙️
tags: adventure
---

# Config your Git ⚙️

```
# List all variables set in your config file

git config --list
```

The `git config` command takes many options, and most guides on configuring Git will suggest using those commands. What I don’t like about running these, is how it obfuscates what they’re actually meddling with on my computer. I prefer to understand that I have a `.gitconfig` file, where it is (probably my home directory, unless I have saved it somewhere else) and how to open it, and frequently take a proper look so I can intentionally edit everything in there.

```
# Locate your config and see what you have in there

cat ~/.gitconfig
```

I have a dotfiles repo, so I can show my `.gitconfig` here:<br>
[github.com/elisabethirgens/dotfiles/blob/main/.gitconfig](https://github.com/elisabethirgens/dotfiles/blob/main/.gitconfig)<br>
Not that much stuff! but a couple of quirks I have gotten used to having set up.

## Some ideas for things to config

- Create a `.gitignore_global` and never again commit a `.DS_Store` ever
- Set up your own `.gitmsg` with template for writing commit messages

Here is one of the advantages of having a dotfiles repo, I can later read (and also show you!) in the commit messages more context about the changes I made to my config. Examples:

- Experiment with useConfigOnly for gitconfig: [21269f4](https://github.com/elisabethirgens/dotfiles/commit/21269f41051615d273c7738f544bcc4acf50d938)
- Add a template for writing commit messages: [d00e728](https://github.com/elisabethirgens/dotfiles/commit/d00e7282d1f6f38a8404af72577377646dbe7968)
- Set up a working global gitignore: [98c3e1c](https://github.com/elisabethirgens/dotfiles/commit/98c3e1c08632f13c961062d7715782a2e0c3e05b)

See also…

<div class="adventure">
  <a href="../commit-signature/">Sign commits&emsp;🔐</a>
</div>

---

## Deep dive 🐰🕳️

Julia Evans asked people about their favourite git config options

> As usual I got a TON of great answers and learned about a bunch of very popular git config options that I’d never heard of.

and wrote this comprehensive post afterwards: [Popular git config options](https://jvns.ca/blog/2024/02/16/popular-git-config-options/)

> It was a little confusing to summarize these because git’s default options have actually changed a lot of the years, so people occasionally have options set that were important 8 years ago but today are the default.

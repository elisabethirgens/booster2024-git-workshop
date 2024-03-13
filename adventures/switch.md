---
title: switch branches 🎛️
tags: adventure
---

# Switch branches 🎛️

Once upon a time, a command named ‘checkout’ handled very different Git operations, which was super confusing and people managed to use it anyway and of course you still can today if you want to. But…

There are newer Git commands with clearer responsibilities and less confusing names. My brain has appreciated picking up this replacement for ‘checkout’ and perhaps you will too.

```
# Switch to a branch (that already exists)

git switch that-badass-feature-branch
git switch main
```

```
# Create and switch to a new branch

git switch --create my-awesome-new-branch
```

```
# Throw away local changes and switch to a specific branch

git switch --discard-change main
```

See also…

<div class="adventure">
  <a href="../restore/">restore files&emsp;🗂️</a>
</div>
<div class="adventure">
  <a href="../branch/">branch&emsp;🌳</a>
</div>

---

## Released in Git 2.23

`git switch` was introduced together with `git restore` almost 5 years ago. Both are still marked “experimental” in the official Git docs, but I suspect I can think of that as a formality for my needs.

> The new commands, by contrast, aim to clearly separate the responsibilities of git checkout into two narrower categories: operations which change branches and operations which change files. To that end, `git switch` takes care of the former, and `git restore` the latter.

—&nbsp;GitHub Blog with [Highlights from Git 2.23](https://github.blog/2019-08-16-highlights-from-git-2-23/)

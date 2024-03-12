---
title: restore 🗂️
tags: adventure
---

# Restore files 🗂️

Once upon a time, a command named ‘checkout’ handled very different Git operations, which was super confusing and people managed to use it anyway and of course you still can today if you want to. But…

There are newer Git commands with clearer responsibilities and less confusing names. My brain has appreciated picking up this replacement for ‘checkout’ and perhaps you will too.

```
# Restore this file to the last committed version
# (discarding any changes to this file in working directory)

git restore component-thingy.js
```

```
# Use the interactive mode to select hunks to restore

 git restore --patch
```

See also…

<div class="adventure">
  <a href="../switch/">switch branches&emsp;🎛️</a>
</div>
<div class="adventure">
  <a href="../hunk/">hunk&emsp;🥰</a>
</div>

---

## Released in Git 2.23

`git restore` was introduced together with `git switch` almost 5 years ago. Both are still marked “experimental” in the official Git docs, but I suspect I can think of that as a formality for my needs.

> The new commands, by contrast, aim to clearly separate the responsibilities of git checkout into two narrower categories: operations which change branches and operations which change files. To that end, `git switch` takes care of the former, and `git restore` the latter.

—&nbsp;GitHub Blog with [Highlights from Git 2.23](https://github.blog/2019-08-16-highlights-from-git-2-23/)

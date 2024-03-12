---
title: stash 📦
tags: adventure
---

# stash 📦

I think of stash as that huge messy box labelled ”miscellaneous” where I stuff anything “temporarily” and if I forget about that thing, it will basically disappear, unless I really REALLY needed it anyway and am willing to jump though hoops to find it at the bottom of the box. And mostly I will use this command for something that I will retrieve shortly after it was stashed, right at the very top of the box.

```
# Select changes to stash in the box

git stash --patch
```

If the interactive mode is unfamiliar, be sure to visit:

<div class="adventure">
  <a href="../hunk/">hunk&emsp;🥰</a>
</div>

```
# Pop stashed changes out of the box, back into my working directory

git stash pop
```

You can do all sorts of fancy operations, like name a stash and list all your stashes. Not sure I want an additional list of WIP though. I will often want to preserve work that is not done yet, but I’d rather do that by creating additional branches, commit WIP to those branches, and later iterate over the commits with:

<div class="adventure">
  <a href="../interactive-rebase/">interactive rebase&emsp;😎</a>
</div>

---

## Clean my working directory

I have typically also used stash to _intentionally_ get rid of stuff into a box labelled miscellaneous, but when making this workshop, I realised more commands have a `--patch` than I was familiar with, and it might make sense to use a different command to get rid of stuff I am certain I won’t need. Instead of cramming that junk into a box, I could use:

<div class="adventure">
  <a href="../restore/">restore&emsp;🗂️</a>
</div>

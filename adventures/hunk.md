---
title: Hunk 🥰
tags: adventure
---

# Hunk 🥰

The name of this concept is [hilarious](https://www.merriam-webster.com/dictionary/hunk), and it’s also the best thing ever. My life with Git on the command line improved drastically when I understood I had way more flexible options to add changes than using the delusive `.` I had initially learnt. There is a [2017 blog post](https://elisabethirgens.github.io/notes/2017/06/git-add-patch/) to mark the occasion, and quoting myself:

> Learning this also came with a better understanding of staging. This has previously just been a step I go though, without it meaning much. And wow, I can now stop worrying about making multiple unrelated changes — because I know how to create clean commits out of it all.

- Make small changes in perhaps 3-4 different files to try this out

```
# Use the interactive mode to select hunks to add

git add --patch
```

- Select some changes with `y` for yes, and try also `n` for no
- If you now commit, that will be with only the changes selected with yes

```
# Also to select hunks to restore! or to stash!

git restore --patch
git stash --patch
```

## Slow staging 🐢

What I especially like about this approach is that it will slow down the process. It gives me a chance to review my own changes. I don’t accidentally commit changes that I didn’t intend to commit. This is also a routine that makes it easier to avoid pull requests with a flood of unrelated changes — and instead split my changes into separate and intentional pull requests, easier for other people to review.

I know people can feel that a workflow like this ‘inefficient’ compared to staging and committing everything with a single command shortcut. There are some interesting discussions to be had there about what creates speed and friction in collaborating with other people on building software.

## Other options

```
y - stage this hunk
n - do not stage this hunk
q - quit; do not stage this hunk or any of the remaining ones
a - stage this hunk and all later hunks in the file
d - do not stage this hunk or any of the later hunks in the file
s - split the current hunk into smaller hunks
e - manually edit the current hunk
? - print help
```

The `a` for all later hunks is very helpful when I am working with dependencies and the interactive mode has ventured into a lockfile with an avalache of changes that I definitely do not want to look at in hunks.

I also really like the `s` for split when there are changes close to each other in the same file.

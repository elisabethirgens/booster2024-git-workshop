---
title: branch 🌳
tags: adventure
---

# branch 🌳

Often I see people have workflows involving a shortcut for common Git operations, and that can be useful. But I also think learning those shortcuts _first_ can stand in the way of understanding the basics of a command like `branch` — and the all the different options the command has.

```
# List branches

git branch
git branch --verbose
git branch --merged
git branch --no-merged
git branch --sort=committerdate
```

```
# Create a new branch

git branch name-of-your-new-branch
```

```
# Delete branches

git branch --delete name-of-old-branch-to-delete
```

## Rename branch

When I start working on something, I never know what to name that branch. I will often initially name any new branch something like `wip` or `wip-whatever` and then later rename the branch after I understand which commits I intend to park on that specific branch.

```
# Move and rename

git branch --move new-branch-name
```

## Delete Multiple Local Branches

```
# Delete all local branches that are fully merged

git branch | grep --invert-match "main" | xargs git branch -d
```

Deconstructed this command will:

- `git branch` to list existing branches
- `|` is a pipe that takes the result from the command on it’s left and sends that into what ever comes on the right hand side of the pipe
- `grep --invert-match "main-"` to find branch names not matching ‘main’
- another pipe `|` so any and all branches not matching ‘main’ are piped into the next command
- `xargs` to repeat what comes next for each output
- `git branch -d` to ‘delete fully merged branch’

And if I’m absolutely certain I have no local commits I want to keep, I can replace the `-d` with `-D`:

```
-d, --delete          delete fully merged branch
-D                    delete branch (even if not merged)
```

## But wait, there’s more!

```
git branch -h
```

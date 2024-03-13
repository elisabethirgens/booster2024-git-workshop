---
title: cherry-pick 🍒
tags: adventure
---

# cherry-pick 🍒

Once in a blue moon, I want to pick a commit from one branch and apply it to another branch. This might not be the most useful command ever, but can be fun to know about.

```
# Create and switch to a new branch

git switch --create first-branch
```

- Make for example 3 commits to this branch

The scenario is that you change your mind about something. Perhaps you initially intended to make one larger PR, but then find out that it would be helpful to open a separate PR with only 1 of the commits.

```
# Find the commitSHA of the commit you plan to cherry-pick

git log -3 --oneline
```

SHA? Julia Evans has a [commit SHA comic](https://wizardzines.com/comics/sha-same-code/) that explains!

```
# Create and switch to a different new branch

git switch --create second-branch

# Use the commitSHA to pick that commit

git cherry-pick commitSHA

# Verify the commit has now been picked from first-branch to second-branch

git log -1
```

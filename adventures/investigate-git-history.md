---
title: Investigate Git history 🕵️
tags: adventure
---

# Investigate Git history 🕵️

The code base is a crime scene and you are the detective.

### What’s going on in that file? Why is this line of code there?

Try these examples to investigate the Eleventy config of this repo, where I have taken extra care to leave some context for the commits in the commit messages…

- `git blame eleventy.config.js`
- `git show 16cb3ac6 72ae99dc --quiet`
- `git log eleventy.config.js`
- `git log --oneline eleventy.config.js`
- `git show 16cb3ac`

Git history starts to become interesting if the commits are good. What makes a “good commit”? I linked to this post on the frontpage but I will plug it again 😈 This is from the GitHub Blog and is a convincing argument for why quality commits matter: [Write Better Commits, Build Better Projects](https://github.blog/2022-06-30-write-better-commits-build-better-projects/)

## More log options to play with

- `git log`
- `git log --reverse`
- `git log -3`
- `git log --oneline`
- `git log --relative-date`

The code base is a crime scene and you are the detective.

### What’s going on in that file? Why is this line of code there?

Try these examples to investigate this repo, where I have taken extra care to leave some context for the commits in the commit messages…

- `git log adventures/checkout.md`
- `git blame eleventy.config.js`
- `git show 16cb3ac6 72ae99dc --quiet`
- `git log eleventy.config.js`
- `git log --oneline eleventy.config.js`
- `git show 16cb3ac`

Git history starts to become interesting if the commits are good. What makes a “good commit”? I linked to this post on the frontpage but I will plug it again 😈 This is from the GitHub Blog and is a convincing argument for why quality commits matter: [Write Better Commits, Build Better Projects](https://github.blog/2022-06-30-write-better-commits-build-better-projects/)

## More log options to play with

- `git log`
- `git log --reverse`
- `git log -3`
- `git log --oneline`
- `git log --relative-date`

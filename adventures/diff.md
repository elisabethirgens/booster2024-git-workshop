---
title: diff 🥳
tags: adventure
---

# Diff with all the options 🥳

The fun starts with adding options. I suspect this one might be easier to practice when you have real life diffs to look into in a real life project, but try to take a few of them for a spin and perhaps that means you remember them next time you have a messy situation to diff.

- Make a good handful of changes in different files
- Try these different options _before_ you stage or commit
- Stage some changes, commit others, and try out the options again

---

Show me unstaged changes:

```
git diff
```

This basic command without any options will quickly show me way too much info, or too little if I have started to commit. I find it’s when I start adding options that it becomes helpful.

Show me changes compared to the main branch
(both commits and unstaged changes):

```
git diff main
```

Show me changes for a specific file or directory:

```
git diff filename.js
git diff src
```

Give me just an overview:

```
git diff --stat
```

Show me the diff but without a specific file:

```
git diff ':!package-lock.json'
```

I have staged many changes in many files, give me a quick overview:

```
git diff --staged --stat
```

There are so many more! Can you find any that look interesting?

```
git diff -h
```
Show me the diff but without a specific file:

```bash
git diff ':!package-lock.json'
```
- Copilot
---
title: reset 🧹
tags: adventure
---

# reset 🧹

You might think someone who volunteers to organise a workshop on command line Git must be on friendly terms with a command like reset, but this one never seems to stick for me. I blame the official description that says “Reset current HEAD to the specified state” — when the command should obviously be named `git uncommit`. Which is presisely the phrase I will search for to find some stackoverflow describing one of these alternatives:

```
# Undo the most recent commit
# but keep its changes unstaged in your working directory

git reset HEAD~1
```

That is the one 👆 I find most useful, if I want to ‘uncommit’ it seems to be because I want to keep working on the change and so I want it in my working directory — not staged like the next 👇 alternative will give me.

```
# Undo the most recent commit
# but keep the changes in that commit staged

git reset --soft HEAD~1
```

```
# Nuke 3 commits and all its changes never to be seen again

git reset --hard HEAD~3
```

More on…

<div class="adventure">
  <a href="../head/">HEAD&emsp;🎩</a>
</div>

---

## Deep dive 🐰🕳️

I suspect reset can be helpful to understand better. Perhaps this [Atlassian guide for Git reset](https://www.atlassian.com/git/tutorials/undoing-changes/git-reset) does the trick. Or maybe this one where they describe and compare [Resetting, checking out & reverting ](https://www.atlassian.com/git/tutorials/resetting-checking-out-and-reverting):

> Because they’re so similar, it’s very easy to mix up which command should be used in any given development scenario. In this article, we’ll compare the most common configurations of git reset, git checkout, and git revert. Hopefully, you’ll walk away with the confidence to navigate your repository using any of these commands.

Hmmm… I wonder if my confusion around `reset` is because it’s often compared to `checkout`, which I ditched the day Git released these two alternatives:

<div class="adventure">
  <a href="../switch/">switch branches&emsp;🎛️</a>
</div>
<div class="adventure">
  <a href="../restore/">restore files&emsp;🗂️</a>
</div>

---
title: rebase ⏩
tags: adventure
---

# rebase ⏩

There are two kinds of rebase: standard and interactive. Examples:

- `git rebase main` for when your branch has diverged from main and you want to make sure you have the latest commits from main ‘before’ your own changes
- `git rebase --interactive HEAD~5` to tidy up a branch and squash 5 commits

It’s easy to conflate the two when hearing people talk about rebase, but don’t let warnings about (standard) rebase and potential merge conflicts stop you from trying out interactive rebase.

Julia Evans has written a very useful post on [git rebase: what can go wrong?](https://jvns.ca/blog/2023/11/06/rebasing-what-can-go-wrong-/) where she describes that:

> My goal with this isn’t to convince anyone that rebase is bad and you shouldn’t use it (I’m certainly going to keep using rebase!). But seeing all these problems made me want to be more cautious about recommending rebase to newcomers without explaining how to use it safely.

Julia also has a great comic with [rules for rebasing](https://wizardzines.com/comics/rules-for-rebasing/)

These guides from Atlassian are also nice:

- [Git rebase](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase)
- [Merging vs. rebasing](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)

---

Rebasing! What a great way to learn more about Git.

See also…

<div class="adventure">
  <a href="../interactive-rebase/">Ready for your first Git interactive rebase? 😎</a>
</div>

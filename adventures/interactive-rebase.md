---
title: Ready for your first Git interactive rebase?
tags: promotedAdventure
---

# Ready for your first Git interactive rebase?

No prior experience with interactive rebasing, and not sure why you’d ever want to?<br>
Congrats! You have found an excellent adventure.

- `git switch --create your-new-branch`
- Commit a handful of random changes to any file(s) in this repo
- You now have a branch with a mess of commits to clean up! Read on…

---

## The problem 😵‍💫

My branch is a mess of commits. While working on this change, I accidentally deleted the wrong file, added that file back again, tested and iterated, whoops forgot to rename a variable in a test that broke the build, and finally remembered to update the readme. It’s perfectly fine that these five commits were part of my process — but there is absolutely no good reason to preserve this mess.

## The lazy squash-and-merge 🤷🏻

Reviewers of the PR will just have to ignore the mess, and I will sweep it under the rug with a squash when I merge. Cause that makes the mess go away, right?! The least I can do is to select the button to squash-and-merge. Hopefully nobody will want to investigate the history of this change in the future.

But even better than a squash-and-merge, would be to tidy up this branch. Let’s do that!

## Interactive rebase 😎

Recommended prerequisite before diving into this Git operation, is to make sure you have a Git editor you know how to use. Adventure detour (interactive rebase will wait!): [Know your Git editor](../git-editor/)

```
# Check the log, was it five commits I want to clean up?
git log -5
```

Yes, that looks correct. Okay, lets roll up our sleeves:

```
# Make a list of the 5 commits about to be rebased
git rebase --interactive HEAD~5
```

My Git editor will now show me a list like this:

```
pick 2dcd477 Add awesome feature
pick 2a76135 ops dont delete important.js
pick 69cf371 wip iterations
pick a999fe0 whoops rename variable in test
pick c7f3e47 remember readme update
```

In the editor, I can now use commands like this one:

```
s, squash <commit> = use commit, but meld into previous commit
```

I want to meld the 4 last commits into the first.<br>
I can do that by replacing pick with `s` for squash like this:

```
pick 2dcd477 Add awesome feature
s 2a76135 ops dont delete important.js
s 69cf371 wip iterations
s a999fe0 whoops rename variable in test
s c7f3e47 remember readme update
```

After saving / writing that, the next step is the commit message(s). <br>The list in my editor now looks like this:

```
# This is a combination of 5 commits.
# This is the 1st commit message:

Add awesome feature

# This is the commit message #2:

ops dont delete important.js

# This is the commit message #3:

wip iterations

# This is the commit message #4:

whoops rename variable in test

# This is the commit message #5:

remember readme update
```

Note the instructions:

```
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
```

So what I will do in this specific case, is add `#` in front of the scraps of commit messages for 2,3,4,5 to comment those lines out. This will leave me with `Add awesome feature`.

After saving / writing the commit message, I want to verify that my rebase happened as intended:

```
# Check the log, are my 5 commits now cleaned up to be 1
git log -2
```

Looking good! The second commit is now something else on the main branch. 🎉

If this is a branch I have previously pushed to remote, I’m gonna need to use force to update it:

```
# Use the force but with safety options
git push --force-with-lease --force-if-includes
```

I have cleaned up the mess, and am ready to change the PR status from **draft** to **ready for review**.

---

This was just one example with a basic clean up. Practice a couple of times! And perhaps start looking into other commands like these:

- `r, reword` will use commit, but edit the commit message
- `f, fixup` like "squash" but keep only the previous log message
- `d, drop` to remove commit

It’s also possible to reorder the commits just by moving them around. Have fun!

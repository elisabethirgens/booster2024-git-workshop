---
title: Grasp your basic commands first 👈
tags: adventure
---

# Grasp your basic commands first 👈

When I started using Git, it was on the command line. VS Code with a visual representation of Git source control did not yet exist. There might have been other GUI alternatives? I’m not sure, nobody introduced me to those. They did however, show me this thing on my laptop called a terminal, and taught me how to contribute to a code base with these commands:

```
git status
git add .
git commit -m "Change something"
git push
git pull

# and also some way to work with branches
```

For many years, this was my entire Git tool box. You can definitely collaborate with other humans on developing software, and get by just fine as a developer, with a list like this one.

But for me, this limited workflow also turned into a plateau where I was stuck.

## My best tip for having fun with command line Git

- First grasp the basic commands needed for making contributions to a repo
- and then go figure out how to move past that plateau to learn more!

I hope you will [find many adventures](../) on that mission 🚀

---

Not yet familiar with commands to contribute to a repo? Crack your knuckles and take a deep breath. Follow this guide and don’t hesitate to ask someone next to you for help.

# Your first contribution?!

After you have verified having [the fundamentals](../fundamentals/) sorted out, you can find somewhere on your laptop (anywhere is fine, perhaps a directory for code projects?!) where you want to have the workshop repo.

```
# Download the remote repo to your machine

git clone https://github.com/elisabethirgens/booster2024-git-workshop.git
```

You now have a local repo. This is a clone of the remote repo on [github.com/elisabethirgens/booster2024-git-workshop](https://github.com/elisabethirgens/booster2024-git-workshop/) — and the local repo is all yours. Later you will push from local to remote, but it can be good to know what you do here _before_ you push cannot impact the remote that other people have access to. The local repo is local to your machine.

```
# Change your working directory

cd booster2024-git-workshop
```

```
# Start with checking the status

git status
```

Notice what the output looks like before you make any changes.

```
# Switch from the main branch to a new branch you create

git switch --create your-branch-name-whatever
```

Open your editor. Make any random change to the file `playground.md`

```
# Check what your change looks like

git status
```

🔴 Red means there is a change not staged for commit

```
# Add the changed file to the staging area

git add playground.md
```

```
# Check again!

git status
```

🟢 Green means the file is staged and ready to be committed

```
# Commit the change to your local repo, with some kind of message

git commit --message "Make my first contribution, wohooo!"
```

```
# Check yet again!

git status
```

```
# Display the most recent 2 commits, yours will be one of them!

git log -2
```

Okay, this is it. You are ready to push out from your laptop

```
# Push your local changes to the remote repo on github.com

git push
```

- Visit [github.com/elisabethirgens/booster2024-git-workshop](https://github.com/elisabethirgens/booster2024-git-workshop)
- You should there find a yellow box
- Open a pull request! Merge it!

Congrats! 🎉

After you have merged your change to the main branch in the remote repo, your local repo is out of sync. Update your local repo by switching away from your branch and back to the main branch, and then pull down the new version of the main branch from the remote repo:

```
git switch main && git pull
```

Now you are ready to practice it all again.<br>
Make a new branch, and make other changes to different files.

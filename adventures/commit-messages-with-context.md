---
title: commit messages with context 🌻
tags: adventure
---

# commit messages with context 🌻

When I use the shortcut `git commit -m "Made changes"` I miss out on the opportunity to provide context for the change — context that I have when I make the change, but that will soon be lost if I don’t write it down. This is a call for people to **write commit messages with both subject line and body**.

## How to write longer commit messages?

```
# Use the command without options to open your Git editor

git commit
```

See also…

<div class="adventure">
  <a href="../git-editor/">Know your Git editor&emsp;🧐</a>
</div>
<div class="adventure">
  <a href="../investigate-git-history/">Investigate Git history&emsp;🕵️</a>
</div>

---

## Why write longer commit messages?

I wrote a recent blog post in Norwegian about [God kode har kontekst i commit-meldingen](https://amedia.github.io/jotter/2024/kontekst-i-commit-melding/)<br> and here are parts of that post:

### Eksempler på nyttig kontekst

Kanskje jeg vet noe som ikke nødvendigvis en reviewer er kjent med:

```
Remove CPU limit for deployment of cheesecake

This change is done because SRE recommends disabling CPU limits,
Kubernetes pods always get the needed CPU from CPU requests.
Learn more: https://home.robusta.dev/blog/stop-using-cpu-limits
```

Trenger alle commit-meldinger en beskrivelse? Kan ikke endringen være selvforklarende?<br>Joda, noen endringer er det:

```
Upgrade dependency SuperDuperOven 2.3
```

Men kode er som regel ikke så selvforklarende som vi som kodere liker å tro på. Kanskje har vi oppdaget noe vi ikke kjente til da koden først ble skrevet, da er det en kul investering å forklare og dokumentere dette for dem som skal gjøre en review. Og for utviklere som skal sette seg inn i koden seinere:

```
Refactor chocolateCake.js

Because we found a bug in the previous implementation! If there are too
many cakes, some of them will not bake properly. This batch limit seems
like a good idea we want to try. Hopefully the new SuperDuperOven 3 will
support continuous baking so that we can remove this limit later.
```

Kan ikke en sånn forklaring stå i PRen? Jo… men det er _lenger_ vekke fra koden. Dokumentasjon vi skriver i pull request, på et issue, på et trello-kort; ingen av disse stedene er like nærme og uløselig knyttet til koden som en commit-melding.

Og i motsetning til kodekommentarer, så blir forklaring i en commit-melding aldri utdatert. Tvertimot så stabler de seg pent oppå hverandre og forteller en historie som kan være nyttig for fremtidige utviklere:

```
Remove cake limit

This change was made because after migrating to SuperDuperOven v3
and testing over a couple of weeks with an increased limit for cakes,
we think it will be fine to now remove the limit. Non-stop chocolate!
```

---

### Read more

Plenty people have written about why it matters how we make our commits:

> Beskrivelse av hvorfor denne endringen er gjort. (Hva var problemet eller saken som skulle løses?) Vi commiter ikke kode inn i repoet helt uten grunn, det pleier å være en årsak til de endringene vi gjør.<br>
> — [NAV IT: Om å skrive gode commit-meldinger](https://github.com/navikt/offentlig/blob/main/guider/commit-meldinger.md)

> [Commits] are snapshots of your entire repository at specific times…based around logical units of change. Over time, commits should tell a story of the history of your repository and how it came to be the way that it currently is.<br>
> — [GitHub: Git Guides](https://github.com/git-guides/git-commit)

> a well-crafted Git commit message is the best way to communicate context about a change to fellow developers (and indeed to their future selves)<br>
> — [cbeams: The seven rules of a great Git commit message](https://cbea.ms/git-commit/#seven-rules)

> Commits are a firsthand historical record of exactly how and why each line of code came to be. They even come with human-readable messages! As a result, a repository’s commit history is the best tool a developer can use to explain and understand code.<br>
> — [GitHub: Write Better Commits, Build Better Projects](https://github.blog/2022-06-30-write-better-commits-build-better-projects/)

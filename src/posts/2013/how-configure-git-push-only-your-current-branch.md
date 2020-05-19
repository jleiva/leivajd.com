---
path: "/how-configure-git-push-only-your-current-branch"
date: "2013-12-16"
title: "How to configure git to push only your current branch"
type: "recordar"
externalUrl: "http://makandracards.com/makandra/8039-git-how-to-configure-git-to-push-only-your-current-branch"
categories: ["Tools", "Git"]
---

Explicación de como [cambiar a cual branch se hará push](http://makandracards.com/makandra/8039-git-how-to-configure-git-to-push-only-your-current-branch) cuando corremos el comando `git push`.

```
git config --global push.default current
```
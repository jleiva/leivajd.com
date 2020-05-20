---
path: "/git-alias"
date: "2014-08-26"
title: "Git, c&oacute;mo configurar alias"
type: "nota"
categories: ["Tools", "Git"]
---

Pasos simples para usar alias en los comandos de git, por ejemplo, en lugar de escribir git status, podemos solo hacer gst:

1. abrir `~/.gitconfig`
2. agregar las l&iacute;neas de alias, formato **[shortcut]=[original command]**

Mis alias por ejemplo son:

```
[alias]
    st = status
    pl = pull
    co = checkout
    br = branch
    ps = push
    mdev = merge develop
    ci = commit -m
```

Una vez hecho el cambio, en lugar de ejecutar `git status`, puedo hacer `git st`.

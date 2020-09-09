---
path: "/recuperar-git-branch"
date: "2020-09-08"
title: "Recuperar un Git branch eliminado"
type: "recordar"
externalUrl: "https://stackoverflow.com/questions/3640764/can-i-recover-a-branch-after-its-deletion-in-git"
tags: ["Git", "TIL"]
tweet: "https://twitter.com/leivajd/status/1303488282895020034"
---

**TIL** como recuperar un branch local de Git que fue eliminado.

`git checkout -b <branch-name> <sha>`

Si no se tiene el <abbr title="Simple Hashing Algorithm">SHA</abbr> se puede hacer un [reflog](https://git-scm.com/docs/git-reflog)

`git reflog --no-abbrev`

Esto retorna el log de referencia completo, incluido el historico de commits para el branch que eliminamos; el SHA que nos interesa es el último commit del branch que se quiere recuperar.

---
path: "/paquetes-globales-npm"
date: "2020-07-08"
title: "Revisar paquetes globales de npm"
type: "recordar"
externalUrl: "https://medium.com/better-programming/how-to-check-your-globally-installed-npm-packages-32a14469b95a"
tags: ["TIL", "npm"]
tweet: "https://twitter.com/leivajd/status/1281055413945974786"
---

**#TIL** como listar todos los paquetes de [npm](https://www.npmjs.com/) instalados de manera global.

Listar cada paquete global, incluidas sus dependencias:

```shell
npm list -g
```

Listar solo paquetes _top-level_:

```shell
npm list -g --depth 0
```

Y por supuesto, como eliminar paquetes globales:

```shell
sudo npm uninstall -g <nombre del paquete>
```

El art&iacute;culo completo en [How to Check Your Globally Installed npm Packages](https://medium.com/better-programming/how-to-check-your-globally-installed-npm-packages-32a14469b95a)

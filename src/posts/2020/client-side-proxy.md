---
path: "/client-side-proxy"
date: "2020-11-04"
title: "Building a client side proxy"
type: "recordar"
externalUrl: "https://www.voorhoede.nl/en/blog/building-a-client-side-proxy/"
tags: ["JAMstack", "A11y"]
---

Un caso de uso de service worker diferente, [client side proxy](https://www.voorhoede.nl/en/blog/building-a-client-side-proxy/) que permite acceder, sin necesidad de un VPN, a servidores que han sido bloqueados.

> ... ‘offline first’-solution that proxies any request to the best available mirror, preventing authorities from censoring our content.

- JAMstack build, usan un WordPress headless con RESTful API, Eleventy para generar el sitio estático, con eso se aseguran no usar client side frameworks.
- Usan la estragetia de cache stale-while-revalidate.
- Los assets como imagenes estan hospedados en un servidor independiente, el cual es usado por los servidores "espejo", así se aseguran que, si un server es bloqueado, los otros también tengan acceso a los assets.

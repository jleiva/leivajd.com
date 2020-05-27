---
path: "/responsive-web-design-preserving-images-aspect-ratio"
date: "2012-06-19"
title: "Responsive Web Design: preserving images’ aspect ratio"
type: "recordar"
externalUrl: "https://www.brucelawson.co.uk/2012/responsive-web-design-preserving-images-aspect-ratio/"
categories: ["Responsive", "CSS"]
---

Ni tan obvio, una rápida solución para mantener el aspect ratio cuando las imagenes tienen los atributos height y width en el HTML.

```
img {
    max-width: 100%;
    height: auto;
}
```

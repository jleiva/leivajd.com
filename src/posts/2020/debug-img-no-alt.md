---
path: "/debug-img-no-alt"
date: "2020-06-21"
title: "Debug images without alt attribute with CSS"
type: "recordar"
externalUrl: "https://twitter.com/geoffreycrofte/status/1274652138854121474"
tags: ["CSS", "A11y", "HTML", "Accesibilidad"]
---

Pequeño tip, debuguear imagenes que no tienen el atributo `alt` usando CSS.

```css
img:not([alt]) {
  outline: 2px dashed pink;
}
```
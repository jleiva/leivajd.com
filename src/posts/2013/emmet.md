---
path: "/emmet"
date: "2013-10-26"
title: "Emmet"
type: "nota"
categories: ["HTML", "Tools"]
---

[Emmet](http://emmet.io/) es un plugin que nos ayuda a mejorar nuestro flujo de trabajo. Una vez instalado en nuestro editor, yo uso **Sublime Text**, hace que escribir HTML y CSS sea mucho más rápido, esto gracias a las abreviaciones y sintaxis que pone a nuestra disposición.

La sintaxis es muy fácil de usar, si sabes CSS la curva de aprendizaje se simplifica aún más, ya que, esta inspirado en los selectores de CSS, y su uso esta muy bien [documentado en el sitio web de Emmet](http://docs.emmet.io/abbreviations/).

Instalar Emmet en Sublime Text usando Package Control:

1. Abrir “Package Control: Install Package”, buscar e instalar Emmet plugin.
2. Reiniciar ST

En Emmet, algo como esto: `div.wrap>(header.header>nav.menu>ul>li*2>a{Item})+div.main>div.content+div.sidebar^footer.footer
`

Se convierte en:

```html
<div class="wrap">
  <header class="header">
    <nav class="menu">
      <ul>
        <li><a href="">Item</a></li>
        <li><a href="">Item</a></li>
      </ul>
    </nav>
  </header>
  <div class="main">
    <div class="content"></div>
    <div class="sidebar"></div>
  </div>
  <footer class="footer"></foote>
</div>
```

Good stuff!!
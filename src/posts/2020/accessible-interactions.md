---
path: "/accessible-interactions"
date: "2020-11-01"
title: "Accessible interactions"
type: "recordar"
externalUrl: "https://adactio.com/journal/17546"
tags: ["A11y", "Accesibilidad", "ARIA"]
---

Jeremy Keith describe un poco su proceso mental para tomar decisiones cuado esta trabajando con [elementos que sigan un patron de _progressive disclosure_](https://adactio.com/journal/17546), como tabs, menus, modal, dialog, etc.

- 80% del trabajo es "sencillo", el 20% es cuando se vuelve tricky, porque entramos en áreas donde no hay reglas claras para tomar decisiones.
- ARIA nos puede ayudar, pero no debemos abusar, [causaria más daño que beneficio](https://css-tricks.com/aria-spackle-not-rebar/).
- Se enfoca primero en cubrir que keyboard y mouse users puedan interacturar con el componente
- Agregar algunos atributos extras, como `aria-expanded`, `aria-hidden` y `aria-controls`, para asegurarse que screen reader users no se estan quedando excluidos.

Par de preguntas que se hace cuando esta tomando decisiones:

1. ¿Debe usar un boton ó un link en el elemento trigger?
2. ¿Debe el elemento target recibir focus de manera automatica?

Ademas, después de haber leído un par de libros de [Heydon Pickering](https://heydonworks.com/), puedo hacer un +1 a su tercera pregunta.

> And when it comes to interactive patterns like the trigger/target examples I’ve been talking about, there’s one more question I ask myself: [what would Heydon do?](https://inclusive-components.design/)

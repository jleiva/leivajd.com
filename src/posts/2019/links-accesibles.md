---
path: "/links-accesibles"
date: "2019-09-14"
title: "Links accesibles y válidos"
type: "nota"
tags: ["Web", "A11y", "Accesibilidad"]
---

### Consideraciones:

- Los enlaces deben tener un atributo `href` que no esté vacío para que se consideren enlaces verdaderos y sean accesibles para los usuarios del teclado.
- Los lectores de pantalla generalmente informan a los usuarios que un fragmento de texto (o un gráfico) es un enlace, por esta razón, los enlaces no necesitan incluir la palabra "enlace" ó "link" en el texto del enlace.
- Los usuarios de lectores de pantalla a menudo navegan de un enlace a otro, saltándose el texto intermedio, los enlaces deben tener sentido fuera de contexto. Frases como "haga clic aquí", "más", "haga clic para obtener detalles", son malas prácticas.
- Para que los efectos (`:hover`, `:focus`) sean independientes del dispositivo, es necesario asegurarse de que los enlaces se puedan activar con el mouse o con el teclado.
- Asegúrese de que los enlaces tengan `:focus`

Nota:

Utilice un elemento de `button` si su enlace tiene:

- un atributo href vacío o no
- _scripting_ ligado al elemento, por ejemplo, si se le da click ejecuta una acción en la misma _página_

### Apariencia del enlace

El color por sí solo no se utiliza para distinguir los enlaces del texto circundante a menos que la relación de contraste entre el enlace y el texto circundante sea de al menos 3: 1 y se proporcione una distinción adicional (por ejemplo, se subraya) cuando se coloca el cursor sobre el enlace y recibe el foco.

### Texto del enlace

```
    <a href="/products">Link text goes here</a>
```

- Evite las frases de enlace poco informativas, como: haga clic aquí, aquí, obtenga más información, más, enlace a [algún destino de enlace], etc.
- A efectos prácticos, el enlace debe ser lo suficientemente largo para transmitir el propósito del enlace y no más. Los enlaces cortos y concisos tienen menos probabilidades de frustrar a los usuarios de lectores de pantalla que los enlaces largos e imprecisos.
- El texto del enlace debe tener una [relación de contraste de 3:1](https://www.w3.org/WAI/WCAG21/Techniques/general/G183.html) con respecto al texto sin enlace que lo rodea.

### URL como enlaces

```
    <a href="https://www.backcountry.com/sc/backcountry-gearheads#section-tab2">Stoke Series Events</a>
```

- Es mejor utilizar texto legible por humanos en lugar de la URL.
- Si la URL es relativamente corta (como la página de inicio de un sitio), la URL se puede utilizar como texto del enlace. La clave es ser considerado con los usuarios de lectores de pantalla que deben escuchar las URL más largas y menos inteligibles.

### Texto alternativo para imágenes utilizadas como enlaces

```
<a href="url/path">
    <img src="path/to/image.jpg" alt="Convey the content of the image and the function of the link">
</a>
```

Siempre que una imagen sea el único contenido dentro de un enlace, la imagen DEBE recibir un texto alternativo que presente la función de ese enlace.

### Acerca del atributo de `title`

No se recomienda utilizar el atributo `title` en elementos <a>. El atributo de title no está expuesto por todos los navegadores de forma accesible, lo que significa que las personas que usan teclados y dispositivos táctiles probablemente nunca verán esa información.

## WCAG 2.0 references

- [Success Criterion 1.4.1 Use of Color (Level A)](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color)
- [Success Criterion 1.4.11 Non-text Contrast (Level AA)](https://www.w3.org/TR/WCAG21/#non-text-contrast)
- [Success Criterion 2.4.4 Link Purpose (In Context) (Level A)](https://www.w3.org/TR/WCAG21/#link-purpose-in-context)

## Sources

- [Quick tip: Creating valid and accessible links](https://a11yproject.com/posts/creating-valid-and-accessible-links/)
- [Links and Hypertext](https://webaim.org/techniques/hypertext/)
- [Alt text and linked images](https://webaim.org/blog/alt-text-and-linked-images/)
- [Using the HTML title attribute](https://developer.paciellogroup.com/blog/2010/11/using-the-html-title-attribute/)

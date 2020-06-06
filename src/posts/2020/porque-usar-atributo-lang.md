---
path: "/porque-usar-atributo-lang"
date: "2020-05-12"
title: "Sobre el uso del atributo lang"
type: "nota"
tags: ["CSS", "HTML", "A11y", "Accesibilidad"]
---

El atributo de HTML [`lang`](https://www.w3.org/TR/html51/dom.html#the-lang-and-xmllang-attributes) especifica el idioma principal del contenido de un documento; para establecer el idioma que se quiere usar, se debe agregar el atributo a la etiqueta `<html>`:

```html
<html lang="es">
  ...
</html>
```

El otro caso de uso para el atributo `lang` es cuando tenemos pedazos de texto que est&aacute;n escritos en un idioma diferente al idioma principal del documento, por ejemplo:

```html
<html lang="en">
  ...
  <body>
    <p>This page is written in English.</p>
    <p lang="es">Pero este texto es en español.</p>
  </body>
</html>
```

El atributo acepta como valor, normalmente, dos letras; en el art&iacute;culo [ISO 2 Letter Language Codes](https://www.sitepoint.com/iso-2-letter-language-codes/) tienen una lista de los diferentes valores. De toda esa lista los &uacute;nicos que he usado son **en** para contenidos en ingles y **es** cuando es español.

Es muy f&aacute;cil olvidarse de este atributo, creo que la raz&oacute;n es porque no tenemos claro para que sirve. En el [post, ¿Por qué usar el atributo de idioma?](https://www.w3.org/International/questions/qa-lang-why.es), dan una explicaci&oacute;n completa de los beneficios y se puede complementar con [On Use of the Lang Attribute](https://adrianroselli.com/2015/01/on-use-of-lang-attribute.html) de Adrian Roselli.

Algunas razones por las que debemos usarlo:

- Hyphens. Al usar `lang` obtenemos el beneficio de tener soporte para guiones (Hyphens). El [soporte va a depender del browser](https://caniuse.com/#feat=css-hyphens) que estemos usando, pero es un beneficio al fin para browsers modernos y se asume que estamos usando [`hyphens: auto` en nuestro CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens).
- Accesibilidad. Es un beneficio para usuarios de screen reader porque permite pronunciaci&oacute;n adecuada del contenido.
- Utilizar el atributo `lang` es un requisito nivel A de <abbr title="Web Content Accessibility Guidelines 2.0">WCAG</abbr>
- Traducci&oacute;n. Abajo queda un extracto del art&iacute;culo [¿Por qué usar el atributo de idioma?](https://www.w3.org/International/questions/qa-lang-why.es), vale la penar leerlo todo.

> Las herramientas de traducción pueden utilizar los atributos de idioma para reconocer páginas o secciones de un texto en un idioma específico, y ajustar automáticamente el proceso de flujo de trabajo o proteger el texto de los cambios que pueda realizar el traductor en las herramientas de traducción.

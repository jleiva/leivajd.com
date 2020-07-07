---
path: "/generar-slug-gatsby"
date: "2020-05-24"
title: "Generar slug en Gatsby"
type: "nota"
postToTwitter: true
tags: ["JAMstack", "Web"]
tweet: "https://twitter.com/leivajd/status/1280563498167271426"
---

Hasta hace unos d&iacute;as, este sitio web corr&iacute;a sobre Drupal, por diferentes razones lo migre a Gatsby y lo mov&iacute; de un servicio de hosting a Vercel, la experiencia ha sido muy buena, m&aacute;s que todo porque me ha permitido aprender.

Aparte del contenido, queria mantener sin varianci&oacute;n la URL de cada post, por la sencilla raz&oacute;n de que, los links a estos post continuen funcionando, como dice [Chris Coyier](https://css-tricks.com/killing-the-url/) _URLs are the single greatest feature of the web_.

Un pequeño problema que me encontr&eacute; al migrar el contenido fue que, el slug default generado por Gatsby no se ajustaba a lo que necesitaba, porque los post los tengo agrupados por año, un folder por año, entonces las URLs me quedaban algo como `<dominio>/<year>/<path>` y necesitaba que fuera `<dominio>/<category>/<path>`

## El slug

El _slug_ &oacute; _path_, es la pieza de la URL que identifica, en un formato amigable y de f&aacute;cil lectura, la secci&oacute;n espec&iacute;fica de un sitio web, por ejemplo, la URL completa de este post es `https://leivajd.com/nota/generar-slug-gatsby`, el slug es la &uacute;ltima parte `/nota/generar-slug-gatsby`.

En un CMS [es com&uacute;n poder personalizar el slug](https://wordpress.com/go/business-website-guidance/what-is-a-slug/) y es algo que damos por hecho. Con Gatsby, la generaci&oacute;n del slug va a depender del [data source](https://www.gatsbyjs.org/docs/content-and-data/) que estemos usando, por ejemplo, si estamos usando alg&uacute;n tipo de headless CMS no hace falta generar el slug, como s&iacute; es necesario hacerlo cuando el contenido viene de archivos markdown.

## Generar slugs

Todo el contenido de este sitio viene de archivos markdown, as&iacute; que, necesite generar y personalizar los slugs de los posts para que coincidan con los originales. Un paso atr&aacute;s antes de hablar m&aacute;s sobre slugs.

Gatsby permite generar secciones/pages de manera programatica, es decir, podemos hacer un query con GraphQL para obtener la data y relacionar esa data a un template espec&iacute;fico, en este caso, el template de post; c&oacute;mo [crear p&aacute;ginas de manera programatica](https://www.gatsbyjs.org/docs/creating-and-modifying-pages/) esta documentado y tambi&eacute;n es parte del [tutorial paso a paso](https://www.gatsbyjs.org/tutorial/part-seven/) de c&oacute;mo crear un sitio web con Gatsby.

El slug es fundamental, porque es la manera mediante la cual podemos acceder a ese contenido que generamos programaticamente. En la documentaci&oacute;n se cubre el [como generar slugs](https://www.gatsbyjs.org/docs/creating-slugs-for-pages/), y depende del plugin [`gatsby-source-filesystem`](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/), mismo que se usa en la configuraci&oacute;n de consumir contenido desde archivos mardown.

Algunas opciones de como generar el slug cuando el contenido viene desde archivos mardown.

### Agregar el slug en metadata

Posiblemente la manera m&aacute;s sencilla es, agregar el slug en la metada de cada archivo markdown, algo como:

```
---
slug: "/nota/generar-slug-gatsby"
date: "2020-05-24"
title: "Generar slug en Gatsby"
---
```

Y despu&eacute;s consumir el slug, como se hace en la gu&iacute;a [Adding Markdown Pages](https://www.gatsbyjs.org/docs/adding-markdown-pages/).

### Usar onCreateNode para generar el slug

Podemos usar la funci&oacute;n [`onCreateNode`](https://www.gatsbyjs.org/docs/node-apis/#onCreateNode) de `gatsby-source-filesystem`, la cual se ejecuta cuando se crea un node (en mi caso un post), y nos permite agregar un _field_ nuevo. El ejemplo de abajo es [de la documentaci&oacute;n](https://www.gatsbyjs.org/tutorial/part-seven/#creating-slugs-for-pages):

```javascript
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
```

El ejemplo anterior hace lo siguiente:

- se condiciona a que el slug se cree solo cuando el tipo del node es MarkdownRemark
- se usa la funcion `createFilePath` para generar el slug basado en el path (ruta) del archivo. Por ejemplo, si la ruta del archivo es `2013/intro-sass.md`, el m&eacute;todo retorna algo como `/2013/intro-sass/`
- se usa la funcion `createNodeField` para agregar el field _slug_ al nodo que se esta creando

### Usar los datos del node para generar el slug

Basado en el punto anterior, y usando la funci&oacute;n `onCreateNode` se puede extraer del node la informacion que se necesite para armar el slug. En mi caso, la metada del markdown se ve algo asi:

```
---
path: "/generar-slug-gatsby"
date: "2020-05-24"
title: "Generar slug en Gatsby"
type: "nota"
tags: ["JAMstack", "Web"]
---
```

Y la implementaci&oacute;n es algo como esto:

- se condiciona a que el slug se cree solo cuando el tipo del node es MarkdownRemark
- se extraen los fields (type y patch)
- se usa la funci&oacute;n `createNodeField` para agregar el field _slug_ al nodo que se esta creando

```javascript
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const type = node.frontmatter.type
    const path = node.frontmatter.path

    createNodeField({
      node,
      name: `slug`,
      value: `/${type}${path}`,
    })
  }
}
```

## Para no olvidar:

- [Adding Markdown Pages](https://www.gatsbyjs.org/docs/adding-markdown-pages/)
- [Creating Slugs for Pages](https://www.gatsbyjs.org/docs/creating-slugs-for-pages/)
- [Creating and Modifying Pages](https://www.gatsbyjs.org/docs/creating-and-modifying-pages/)
- [gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/)

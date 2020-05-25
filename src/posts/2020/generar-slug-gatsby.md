---
path: "/generar-slug-gatsby"
date: "2020-05-24"
title: "Generar slug en Gatsby"
type: "nota"
categories: ["JAMstack", "Web"]
isDraft: true
---

Hasta hace unos d&iacute;as, este sitio web corr&iacute;a sobre Drupal, por diferentes razones lo migre a Gatsby y lo mov&iacute; de un servicio de hosting a Vercel, la experiencia ha sido muy buena, m&aacute;s que todo porque me ha permitido aprender.

Aparte del contenido, queria mantener sin varianci&oacute;n las URL de los post, por la sencilla raz&oacute;n de que, en algunos post nuevos enlazo a cosas que publique en años anteriores, tengo cosas del 2012, y si cambiaba las URL todos esos enlaces se iban a quebrar, como dice [Chris Coyier](https://css-tricks.com/killing-the-url/)

> URLs are the single greatest feature of the web. 

Un pequeño problema que me encontr&eacute; al migrar el contenido fue que, el slug default generado por Gatsby no se ajustaba a lo que necesitaba.

## El slug
El _slug_ &oacute; _path_, es la pieza de la URL que identifica, en un formato amigable y de f&aacute;cil lectura, la secci&oacute;n espec&iacute;fica de un sitio web, por ejemplo, la URL completa de este post es `http://leivajd.com/generar-slug-gatsby`, el slug es la ultima parte `/generar-slug-gatsby`. 

En un CMS [es com&uacute;n poder personalizar el slug](https://wordpress.com/go/business-website-guidance/what-is-a-slug/) y es algo que damos por hecho. Con Gatsby, la generaci&oacute;n del slug va a depender del [data source](https://www.gatsbyjs.org/docs/content-and-data/) que estemos usando, por ejemplo, si estamos usando alg&uacute;n tipo de headless CMS no hace falta generar el slug, como s&iacute; es necesario hacerlo cuando el contenido viene de archivos markdown. 

### Generar slugs

Todo el contenido de este sitio viene de archivos markdown, asi que, necesite generar y personalizar los slugs de los posts para que coincidan con los originales. Un paso atr&aacute;s antes de hablar m&aacute;s sobre slugs.

Gatsby nos permite generar secciones/pages de manera programatica, es decir, podemos hacer un query con GraphQL para obtener la data y relacionar esa data a un template espec&iacute;fico, en este caso, el template de post; como [crear paginas de manera programatica](https://www.gatsbyjs.org/docs/creating-and-modifying-pages/) esta documento y tambien es parte del [tutorial paso a paso](https://www.gatsbyjs.org/tutorial/part-seven/) de como crear un sitio web con Gatsby.

El slug es fundamental, porque es la manera mediante la cual podemos acceder a ese contenido que generamos programaticamente. En la documentacion se cubre el [como generar slugs](https://www.gatsbyjs.org/docs/creating-slugs-for-pages/), y depende del plugin [`gatsby-source-filesystem`](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/), mismo que se usa en la configuracion de consumir contenido desde archivos mardown.

Opciones para generar slugs cuando el contenido viene desde archivos mardown:

1. Usar la funci&oacute;n [`onCreateNode`](https://www.gatsbyjs.org/docs/node-apis/#onCreateNode) de `gatsby-source-filesystem`. Esto es [de la documentaci&oacute;n](https://www.gatsbyjs.org/tutorial/part-seven/#creating-slugs-for-pages):


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

`onCreateNode` se llama cuando se crea un node y nos permite agregar un _field_, en el ejemplo anterior:
* se condiciona a que el slug se cree solo cuando el tipo del nodo sea MarkdownRemark
* se usa la funcion `createFilePath`, para generar el slug basado en el path (ruta) del archivo. Por ejemplo, si la ruta del archivo es `2013/intro-sass.md`, el metodo retorna algo como `/2013/intro-sass/` 
* se usa la funcion `createNodeField` para agregar el field _slug_ al nodo que se esta creando 

Opcion descartada, no era el slug que estaba buscando.


2. Usar los datos del node

```javascript
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const type = node.frontmatter.type;
    const path = node.frontmatter.path;

    createNodeField({
      node,
      name: `slug`,
      value: `/${type}${path}`,
    })
  }
}
```


3. Slug del markdown
https://www.gatsbyjs.org/docs/adding-markdown-pages/
```markdown
---
slug: "/blog/my-first-post"
date: "2019-05-04"
title: "My first blog post"
---
```

### Para no olvidar:

* [Adding Markdown Pages](https://www.gatsbyjs.org/docs/adding-markdown-pages/)
* [Creating Slugs for Pages](https://www.gatsbyjs.org/docs/creating-slugs-for-pages/)
* [Creating and Modifying Pages](https://www.gatsbyjs.org/docs/creating-and-modifying-pages/)
* [gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/)


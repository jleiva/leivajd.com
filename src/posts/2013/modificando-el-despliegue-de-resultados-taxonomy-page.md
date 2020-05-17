---
path: "/modificando-el-despliegue-de-resultados-taxonomy-page"
date: "2013-07-30"
title: "Modificando el despliegue de resultados, Taxonomy page"
type: "nota"
categories: ["Drupal", "Theming", "Modules"]
---

Como siempre, en Drupal hay 189 maneras(??!!) de resolver un problema. Para este caso, mi necesidad era modificar el despliegue, estructura y orden, de los resultados de la página general de taxonomías, digamos lo que obtendría como resultado al entrar a una sección como esta `/taxonomy/term/9`.

El camino fácil, habilitar el display por default que tiene Views, y desde la configuración del View podemos modificar los fields que queremos mostrar y su estructura. Para casos más complejos, se puede utilizar el módulo [Taxonomy Display](https://drupal.org/project/taxonomy_display), que nos ofrece mayor control al momento de configurar como queremos que se despliegue un page de taxonomís.
---
path: "/grunt"
date: "2014-07-06"
title: "GruntJS"
type: "nota"
tags: ["Tools", "Theming"]
---

Oh wow! Esa fue mi reacción la primera vez que vi como funcionaba [Grunt](http://gruntjs.com).

La parte de "Task Runner" se refiere simplemente a automatización de tareas, y por tareas me refiero a procesos como: concatenar archivos, minificar JavaScript o CSS, optimizar imagenes o usar un lint en nuestro JavaScript. Cada una de estas tareas es manejada por un [plugin de Grunt](http://gruntjs.com/plugins).

### Como usar Grunt

La documentación es bastante completa y nos guía desde como instalarlo hasta como usar los plugins.

- Instalar [Node.js](http://nodejs.org/) y [nmp](https://npmjs.org/) (Node.js package manager)
- Instalar Grunt CLI globalmente con `npm install -g grunt-cli` (puede ser que necesitemos `sudo`)
- Dos archivos son requeridos en nuestro proyecto, [package.json](http://gruntjs.com/getting-started#package.json) & [Gruntfile.js](http://gruntjs.com/getting-started#the-gruntfile). Los cuales incluimos en el root del proyecto, o en root de nuestro theme, si estamos trabajando con Drupal.

Una vez que tenemos lo básico, podemos instalar plugins. Lo más sencillo es corriendo desde la terminal:

```
$ npm install [plugin] --save-dev
```

Donde `[plugin]` es el nombre del plugin que queremos instalar, el argumento `--save-dev` le dice a npm que instale localmente (solo para el proyecto en cuestión), y que agregue la referencia al plugin en la sección de devDependencies del archivo package.json Opciones y como configurar cada plugin se detalla en la documentación.

Despues de configurar las tareas, podemos correr Grunt, con:

```
$ grunt
```

Esto correra las tareas que tengamos en default; si tenemos un alias, que el nombre sea `build` y que corra tareas para cuando estamos listos para ir a produccion, podemos hacer

```
$ grunt build
```

### Más información

Algunos recursos a parte de la documentación,

- Un [ejemplo en GitHub](https://github.com/jleiva/grunt-kickoff) del theme con los plugin y configuración que estoy usando.
- [Grunt for People Who Think Things Like Grunt are Weird and Hard](http://24ways.org/2013/grunt-is-not-weird-and-hard/) en 24Ways.
- [Introducción a Grunt](http://7sabores.com/blog/introduccion-grunt), en 7Sabores.
- [Theme development with Grunt](http://chapterthree.com/blog/theme-development-grunt-livereload-lint-uglify-oh-my), en ChapterThree
- Grunt no es el único _task runner_, [Gulp es otra opción](http://gulpjs.com/), al parecer un poco más sencilla de usar y configurar.
- [Choose: Grunt, Gulp, or npm?](http://blog.ponyfoo.com/2014/07/04/choose-grunt-gulp-or-npm)
- [DrupalCon Austin 2014: Getting started with Grunt](https://youtu.be/x_6Od9ZjjZc).

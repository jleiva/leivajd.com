---
path: "/sub-themes-y-la-herencia-de-tpls"
date: "2013-02-06"
title: "Sub-themes y la herencia de tpl's"
type: "nota"
tags: ["Drupal", "Theming"]
---

Estoy creando un sub-theme, usando Drupal 6, y durante el proceso es necesario crear un template `.tpl.php` para un page específico, hasta aquí cero complicaciones.

Después de limpiar cache y revisar que todo ande como se espera, me di cuenta que, el nuevo `page-nombre-especifico.tpl.php` no estaba funcionando. Limpio cache de nuevo, reviso archivos, y nada, no funciona. Antes de perder más tiempo abro la [documentación de sub-themes](http://drupal.org/node/225125) y veo un detalle que me estaba pasando por alto, todos los archivos `.tpl.php` son heredados del base theme, pero si queremos algo específico en el sub-theme, también debemos agregar el template general, que en mi caso era el `page.tpl.php`.

De la documentación:

> Drupal 6: Any .tpl.php files from the parent theme will be inherited. However, to add template files with more specificity, you must also copy over the more general template file from the parent theme manually. For instance, to add a node-blog.tpl.php template in a sub-theme, you must also copy over node.tpl.php from the parent theme. **This bug has been fixed in Drupal 7 but will not be fixed in Drupal 6.**

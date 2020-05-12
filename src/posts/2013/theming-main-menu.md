---
path: "/theming-main-menu"
date: "2013-04-08"
title: "Theming main menu"
type: "nota"
categories: ["Drupal", "Theming"]
---

Desde hace un tiempo, cada vez que construyo un tema, trato de usar elementos de HTML5, `header`, `aside`, `footer` y `nav`, por citar algunos. De esta manera puedo ir aclarando dudas que tengo entre la especificación y la implementación de estos elementos, y así termino de entender cuando sí, y cuando no, se usa cada elemento.

### Tricky, tricky, nav
Usar el elemento `nav` es uno de esos que me dio un poco de trabajo al inicio, porque, a pesar de tener un archivo `tpl.php` para los bloques tipo menu, block--menu.tpl.php, el main menu no aplicaba este template, solo lo aplicaba en custom menus, aquellos que construía para secciones/usos específicos.

Luego de revisar un poco la [documentación](http://drupal.org/node/190815), recorde que, el main menu sale de system module, por lo que, el template debe tener el nombre **block--system--main-menu.tpl.php** para poder sobreescribir la estructura default.
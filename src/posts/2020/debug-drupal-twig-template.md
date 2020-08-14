---
path: "/debug-drupal-twig-template"
date: "2020-08-13"
title: "Habilitar debug de Twig Templates en Drupal 8"
type: "nota"
tags: ["TIL", "Drupal"]
---

**TIL** como habilitar el debug en los templates de Twig de Drupal 8.

Twig ofrece una herramienta para hacer debug, por defecto esta deshabilitado, y es &uacute;til para saber cu&aacute;l es el template que est&aacute; desplegando el markup de cierto elemento (block, region, field, etc). Los pasos para habilitarlo son:

- buscar el archivo `services.yml` en el folder que esta en la ruta `sites/default/`
- si el archivo no existe, se puede hacer una copia de `default.services.yml` y cambiarle el nombre a `services.yml`
- buscar la opci&oacute;n `twig.config` y cambiar el valor a `true`
- en caso de que no tengamos permisos para escribir en el folder `sites/default/`, [este post explica como modificar los permisos](https://www.pluralsight.com/blog/it-ops/linux-file-permissions)
- recordar cambiar la configuraci&oacute;n cuando estemos en producci&oacute;n y cambiar permisos cuando terminemos con el debug.

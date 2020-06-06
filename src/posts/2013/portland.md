---
path: "/portland"
date: "2013-05-21"
title: "DrupalCon Portland 2013"
type: "nota"
tags: ["Drupal", "DrupalCon"]
---

Hoy se inaguró el [DrupalCon Portland 2013](http://portland2013.drupal.org/), segundo Con del año. Estoy impresionado por la rápido que se esta publicando los videos de las sesiones, los cuales se pueden ver en el [canal de Youtube de la DA](http://www.youtube.com/user/DrupalAssociation/videos).

Algunos de los temas que se cubren en este Con son Drupal 8, mobile y Content Strategy, para lo que invitan a Karen McGrane, abajo esta el video de su keynote, el cual vale la pena ver un par de veces, da buenos tips, ejemplos y casos de éxito. Espero ver la sesión de Jonathan Snook sobre SMACSS, ver que hay de nuevo en Drupal 8, específicamente Twig, y que tips puedo aprender sobre Site Building y Responsive.

### Sesiones y notas

Ya he tenido tiempo de ir viendo algunas de las sesiones que me interesan, acá los links y recursos que voy recopilando por sesión.

#### [Mistakes Agencies Make](http://portland2013.drupal.org/node/3083)

- Notas. Tips de como manejar una agencia, Drupal Shop. Cuando crecer, o no, lo importante de ahorrar con cada pago que recibimos, máximo tres proyectos por miembro del equipo, uno es lo ideal, no apostar a un solo proyecto/cliente.
- [Post: Mistakes Agencies Make: A Story in Three Acts](http://www.lullabot.com/blog/articles/mistakes-agencies-make-story-three-acts)

#### [Theming for Site Builders - Getting Started The Drupal Way](http://www.youtube.com/watch?v=EmbjEb9Zvcg&feature=youtu.be)

- Notas. Interesante tema, theming para site builders, la sesión muestra como podemos usar diferentes módulos y opciones de la configuración para, bueno, themear un sitio. Me gusta el tema de las responsabilidades del themer: accesibilidad, SEO, UI/UX y seguridad; no es solo hacer que un sitio web se vea bonito. Planear es una de las fases má importantes. Si no se esta trabajando con un themer, o no se tienen conocimientos en CSS/PHP, se puede iniciar con un theme como Omega o Fusion, o una distro como Panopoly.
- Módulos recomendados. HTML Purifier, Display Suite, SEO Checklist, Menu block, Image Caption Formatter, Chosen y Views Slideshow.

#### [UX Spaces: A new approach to site building and front-end design for Drupal](http://youtu.be/1LkOmHwX19k)

- Notas. Drupal will push you around, por eso lo importante de entender como funciona, conocer a la audiencia y los objetivos. Se habla sobre los problemas que tiene Drupal a nivel de UX, y en la sesión se plantea un enfoque denominado "User Experience Spaces" para construir sitios web en Drupal.
- Libro recomendado [The Elements of User Experience](http://www.amazon.com/The-Elements-User-Experience-User-Centered/dp/0735712026)

#### [Making Drupal Meetups and Events Rock.](http://youtu.be/VKqb3Q7kloQ)

- Notas. Un panel en el que varios organizadores de meetups y Camps comparten tips que nos puede ayudar a tener mejores reuniones, atraer más usuarios y ser mejores evangelizadores. Tips: hacerlo al menos una vez al mes, es la frecuencia más común, realizar presentaciones cortas, casos de estudio, y siempre tener al menos una presentación para principiantes; importante que siempre la reunión gire alrededor de Drupal, aunque sea en un bar o restaurante. Hay que hacer todo lo posible para que los nuevos asistentes se sientan cómodos, máxime si llegan solos; hay que ser consistentes con las reuniones, lo ideal, agendar las próximas 6 reuniones, con fecha, hora y temas a tocar, no recomiendan publicar los eventos en un sitio web especifico de la comunidad, sino usar [GDO](http://groups.drupal.org/).

#### [Charting a New Direction: Why the CEO Matters More than the Developer.](http://youtu.be/artJ3P7_Vmw)

- Notas. Fuerte y claro el mensaje, vender CMS's cada vez es más dificil, el hacer un demo ya no es solo mostrar como pueden crear/editar contenido, si nuestro pitch de venta se basa en eso, estamos muertos. Hay que dejar de pensar en el CMS developer-centric, y pensar más en el usuario, el creador de contenido y los stakeholders, para el que lo más importante es el ROI. Features que nos ayudan a vender mejor, y lo que debemos buscar: Reducir costos, aumentar resultados, reducir riesgo e incrementar la moral (no hay nada peor para la moral del equipo que una pésima implementación de un CMS). Dejar de vender Drupal como CMS y vender la integración de Customer Experience Management (CXM) a Drupal, el futuro(!!??). Hay que dejar de desarrollar features para developers e iniciar a con features post-publish/post-build world.

#### [Dapper Drupal - Custom Tailored Themes](http://youtu.be/4aGQGnjJJlo)

- Notas. Una de las preguntas más frecuentes, What base theme do you use? Respuesta, depende. Del tipo de proyecto que se esta construyendo, quién lo va mantener después, que se puede reutilizar y flexibilidad. Un acercamiento interesante, trabajar en el markup/CSS y después usar Display Suite o Panels para crear la estructura en Drupal, [Death of a Themer](http://www.youtube.com/watch?v=HaJnhYPLvx0). Recomendado, construir nuestro propio base theme, que se ajuste a nuestro proceso, mejorarlo de manera progresiva con cada proyecto en que lo usemos.
- Módulos recomendados. [Panopoly](http://drupal.org/project/panopoly)
  \*Theme recomendados. Kalatheme, usarlo en conjunto con Panopoly y Twitter Bootstrap; Pure; Center y Prototype, ambos en sanbox pero ya los han usado los presentadores en proyectos, los usan como un punto de partida.
- Ejemplos de sitios web, Examiner

#### [Meet the Modernizr module.](http://youtu.be/ojdIHBHQ-tA)

- Notas. Partimos del principio que todos los browsers son diferentes, incluso entre versiones del mismo browser, hay que ajustar la experiencia a las capacidades de cada browser. [User-agent sniffing](https://en.wikipedia.org/wiki/User_agent#User_agent_sniffing) no es una práctica recomendada, es mejor detectar features individuales por browser usando JavaScript, Modernizr. Can I use y HTML5 Please, nos sirven como referencia para saber cuales features soportan los browsers . No siempre debemos usar Modernizr, hay propiedades de CSS que tienen fallback natural, ejem: border-radius o gradientes. Cuando sí usarlo, con geolocalización, CSS transitions, HTML5 video o audio, SVG, o cualquier cosa que sea vital, que pueda romper el UI y que no este presente en el browser. En el video hay varios ejemplos de como implementar el Conditional Loading. Buen consejo, olvidarse de ofrecer soporte a versiones de browsers, en lugar, establecer que features va a soportar el sitio web, tomar esos requerimientos y revisar Can I Use (con el cliente) y llegar a un porcentaje de compatibilidad, ejem: IE8 va a soportar el 83% de las features.
- Módulos recomendados. [Modernizr](http://drupal.org/project/modernizr)
- [Slides de la sesión](http://rupl.github.io/meet-modernizr/#/), vale la pena seguir los links incluidos.

#### [Managing Responsive Web Design with Sass and Breakpoint.](http://youtu.be/fgmXVxYnoWo)

- Notas. Una de las mejoras charlas que he visto sobre Responsive Web y Sass. La charla gira alrededor de un par de extensión de Sass, llamadas Breakpoint y Singularity, la primera nos permite trabajar con media queries, le mete como esteroides, y la segunda nos facilita el trabajo con Grids.

Algunas charlas que me han gustado, son más de procesos así que no las resumo acá:

- [Design Validation and Meaningful Feedback.](http://youtu.be/9fDrmMXxatw)
- [Design Ops: a UX workflow for 2013.](http://youtu.be/ZA7g9oAIkZg)
- [UX Under Fire - On Communicating the Value of UX.](http://youtu.be/Ws7Se0sS2B0)

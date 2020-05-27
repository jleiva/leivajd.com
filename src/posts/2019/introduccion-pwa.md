---
path: "/introduccion-pwa"
date: "2019-09-06"
title: "Introducción a PWA"
type: "notas"
categories: ["PWA", "Responsive", "Web"]
---

Mi charla sobre **Introducción a PWA** fue aceptada en el WordCamp San José 2019, evento que se realiz&oacute; los d&iacute;as 7 y 8 de Setiembre. Si hay feedback ó sugerencias para mejorar la charla y/o mi manera de exponer, me pueden tuitear [@leivajd](https://twitter.com/leivajd) ó escribir a leivajd [@] gmail.com.

[Slides: Introducción a PWA](https://www.slideshare.net/leivajd/intro-pwa-word-camp-2019/)

<iframe src="//www.slideshare.net/slideshow/embed_code/key/CVXOBy38bL8Fd7" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/leivajd/intro-pwa-word-camp-2019" title="Introducción a PWA" target="_blank">Introducción a PWA</a> </strong> from <strong><a href="https://www.slideshare.net/leivajd" target="_blank">Jose Leiva</a></strong> </div>

Abajo quedan los recursos que he usado como base para trabajar y que son la base de la charla.

### Lectura obligatoria

El punto de partida, la documentación "oficial":

- [Going Offline](https://abookapart.com/products/going-offline) de [Jeremy Keith](https://adactio.com/). Posiblemente el mejor recurso para iniciar, por ser corto, fácil de seguir y práctico.
- [Service Workers: an Introduction.](https://developers.google.com/web/fundamentals/primers/service-workers/) - Google
- [The Service Worker Lifecycle.](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle) - Google
- [The Web App Manifest.](https://developers.google.com/web/fundamentals/web-app-manifest/) - Google
- [The Offline Cookbook.](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/) - Google

### Sobre PWA

> The name isn’t for you and worrying about it is distraction from just building things that work better for everyone. The name is for your boss, for your investor, for your marketeer.

La cita anterior es de Frances Berriman, de su [post Naming Progressive Web Apps](https://fberriman.com/2017/06/26/naming-progressive-web-apps/), buena lectura. También vale la pena leer [Progressive Web Apps: Escaping Tabs Without Losing Our Soul](https://infrequently.org/2015/06/progressive-apps-escaping-tabs-without-losing-our-soul/), de Alex Russell, son lecturas que tiran una luz sobre el origen del nombre.

- [Getting Started with Progressive Web Apps.](https://developers.google.com/web/updates/2015/12/getting-started-pwa) - Google.
- [Your First Progressive Web App.](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/) - Google.
- [Add to Home Screen.](https://developers.google.com/web/fundamentals/app-install-banners/) - Google. Criterios para que Chrome despliegue el prompt de Add to Home Screen.
- [The Building Blocks Of Progressive Web Apps.](https://www.smashingmagazine.com/2016/09/the-building-blocks-of-progressive-web-apps/) - Smashing Magazine.
- [Progressive Web Apps Training.](https://developers.google.com/web/ilt/pwa/) - Google. Lo dejo de &uacute;ltimo porque es más largo, pero cubre las diferentes partes.

Entre más leía y probaba Services Workers, más miedo me daba quedar "atrapado" con un Service Worker defectuoso. Esto me llevo a meterle tiempo a encontrar como "matar" un Service Worker, aquí quedan algunos links interesantes:

- [Kill Switch](https://www.w3.org/TR/clear-site-data/#example-killswitch); un ejemplo dentro de la especificación de Clear Site Data de la W3C
- [Mess up & learn: service worker caching gotchas](https://novemberfive.co/blog/mess-up-service-workers-caching-gotcha).
- [Fresher service workers, by default](https://developers.google.com/web/updates/2018/06/fresher-sw) - Google
- [How to Uninstall, Unregister or Remove a Service Worker.](https://love2dev.com/blog/how-to-uninstall-a-service-worker/)
- [Alexander Pope: ServiceWorkers Outbreak | JSConf EU 2017](https://www.youtube.com/watch?v=CPP9ew4Co0M). Un buen video para subir el nivel de ansiedad :D

### Publicar en Play Store

Google permite que un PWA se publique en Play Store, bajo el concepto de Trusted Web Activities (TWA).

- [Using Trusted Web Activities](https://developers.google.com/web/updates/2019/02/using-twa) - Google.
- [Trusted Web Activities Quick Start Guide](https://developers.google.com/web/updates/2019/08/twas-quickstart) - Google.

Con estos post hay que validar que aún aplique, hace 3 meses eran válidos, a hoy no sé.

- [I built a Progressive Web App and published it in 3 app stores. Here’s what I learned...](https://www.freecodecamp.org/news/i-built-a-pwa-and-published-it-in-3-app-stores-heres-what-i-learned-7cb3f56daf9b/)
- [Google Play Store now open for Progressive Web Apps.](https://medium.com/@firt/google-play-store-now-open-for-progressive-web-apps-ec6f3c6ff3cc)
- [This TWA stuff rocks! Finally I got my PWA on Google Play Store.](https://medium.com/@svenbudak/this-twa-stuff-rocks-finally-i-got-my-pwa-on-google-play-store-b92fe8dae31f)
- [Trusted Web Activity - PWA to Play Store Guide.](https://fireship.io/lessons/pwa-to-play-store/)

### Herramientas

- [Progressive Web App Checklist](https://developers.google.com/web/progressive-web-apps/checklist) - Google.
- [What Web Can Do Today](https://whatwebcando.today/). Util para visualizar el estado de APIs disponibles en el browser.
- [Serviceworke.rs](https://serviceworke.rs/). Un cookbook de MDN.
- [PWA Builder](PWA Builder). Un proyecto comunitario de Microsoft.
- [Workbox](https://developers.google.com/web/tools/workbox/). Es una serie de librerias y modulos de Node que nos permiten facilitan integrar la creación del Service Worker, usando Webpack ó Grunt, y crear estrategias de cache sin tanto boilerplate.

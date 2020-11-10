---
path: "/strangler-fig-application"
date: "2020-11-09"
title: "Strangler fig application"
type: "recordar"
externalUrl: "https://martinfowler.com/bliki/StranglerFigApplication.html"
tags: ["Web"]
---

**TIL**, Strangler fig application, una estrategia en la que se va "creando" una nueva aplicación en los bordes de la vieja, va creciendo lentamente hasta que estrangula la aplicación de la que se quiere salir/migrar.

> ...when designing a new application you should design it in such a way as to make it easier for it to be strangled in the future. Let's face it, all we are doing is writing tomorrow's legacy software today. By making it easy to add a strangler fig in the future, you are enabling the graceful fading away of today's work.

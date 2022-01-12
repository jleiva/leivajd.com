---
path: "/react-state-management"
date: "2022-01-10"
title: "React, state management"
type: "nota"
tags: ["React", "Web"]
---

Estoy trabajando en un proyecto en el que hacer _prop drilling_ ya se esta saliendo de control, algunas notas y links que me estan ayudando a tomar una decisi&oacute;n sobre como resolver el problema de _state management_.

[State Management In Next.js](https://www.smashingmagazine.com/2021/08/state-management-nextjs/): alto nivel, sirve como introducci&oacute;n; al final NextJS es un framework y no incluye nada que nos permita manejar el estado de la aplicacion, algunas alternativas que mencionan: prop drilling, usar Context API, Jotai. Me gusto como resume las consideraciones de client-side fetching:

> When requesting data from the client-side, it is important to be mindful of a few things:

> - the user’s network connection: avoid re-fetching data that is already available
> - what to do while waiting for the server response
> - how to handle when data is not available (server error, or no data)
> - how to recover if integration breaks (endpoint unavailable, resource changed, etc)

[Blogged Answers: Why React Context is Not a "State Management" Tool (and Why It Doesn't Replace Redux)](https://blog.isquaredsoftware.com/2021/01/context-redux-differences/) incluye algunos buenos puntos sobre Context y Redux, que son, como se diferencia y cuando usarlos.

Comparing Context and Redux

- Context

  - Does not store or "manage" anything
  - Only works in React components
  - Passes down a single value, which could be anything (primitive, objects, classes, etc)
  - Allows reading that single value
  - Can be used to avoid prop-drilling
  - Does show the current context value for both Provider and Consumer components in the React DevTools but does not show any history of how that value changed over time
  - Updates consuming components when the context value changes, but with no way to skip updates
  - Does not include any mechanism for side effects - it's purely for rendering components

- React+Redux

  - Stores and manages a single value (which is typically an object)
  - Works with any UI, including outside of React components
  - Allows reading that single value
  - Can be used to avoid prop-drilling
  - Can update the value via dispatching an action and running reducers
  - Has DevTools that show the history of all dispatched actions and state changes over time
  - Uses middleware to allow app code to trigger side effects
  - Allows components to subscribe to store updates, extract specific pieces of the store state, and only re-render when those values change

  Me gusto mucho esta parte sobre entender las herramientas

> In order to use any tool correctly, it's critical to understand:

> - What its purpose is
> - What problems it's trying to solve
> - When and why it was originally created

> It's also critical to understand what problems you are trying to solve in your own application right now, and pick the tools that solve your problem the best - not because someone else said you should use them, not because they’re popular, but because this is what works best for you in this particular situation.

---
path: "/til-input-search"
date: "2022-05-17"
title: "input de tipo search"
type: "nota"
tags: ["TIL", "HTML"]
---

**TIL** que los elementos `input` cuando reciben el valor de `search` para atributo `type`, nos proveen funcionalidades como autocomplete y una manera nativa de limpiar el input.

    <form>
        <div>
            <input type="search" id="mySearch" name="q">
            <button>Search</button>
        </div>
    </form>

Funciona similar al atributo `text`, pero dependiendo del browser el estilo es diferente, en Chrome muestra una X que cuando se le da click limpia el input.

Referencia: [`MDN <input type="search">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search)

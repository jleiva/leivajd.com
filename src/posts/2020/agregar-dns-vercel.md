---
path: "/agregar-dns-vercel"
date: "2020-05-11"
title: "Agregar DNS records en Vercel"
type: "nota"
categories: ["JAMstack"]
---

Hace un par de meses empece a usar [Vercel.com](https://vercel.com/), anteriormente llamado ZEIT, como servicio para hospedar landing pages y sitios web, el servicio esta m7aacute;s que recomendado. 

Parte de la migraci&oacute;n incluye actualizar los Nameservers en el proveedor de los dominios, y usar los de Vercel. Agregar un dominio a uno de los proyectos hospedados en Vercel es sencillo, [esta bien documentado](https://vercel.com/docs/v2/custom-domains) y se hace desde el panel de administraci&oacute;n. El problema que encontr&eacute; fue con los DNS records, al momento de escribir este post, actualizar los DNS no se puede hacer desde el panel de administraci&oacute;n, esta es la soluci&oacute;n: 

1. Instalar el [CLI de Vercel](https://vercel.com/download).
2. Inspeccionar que los settings del dominio sean correctos: `vercel domains inspect <domain>`
3. Agregar los DNS records usando el comando: `vercel dns add`

En mi caso, necesitaba agregar los registros para poder usar Gmail, fue algo como esto:

```
vercel dns add <domain> '@' MX ASPMX.L.GOOGLE.COM 1
vercel dns add <domain> '@' MX ALT1.ASPMX.L.GOOGLE.COM 5
vercel dns add <domain> '@' MX ALT2.ASPMX.L.GOOGLE.COM 5
vercel dns add <domain> '@' MX ALT3.ASPMX.L.GOOGLE.COM 10
vercel dns add <domain> '@' MX ALT4.ASPMX.L.GOOGLE.COM 10
```

Hay que reemplazar `<domain>` por el nombre de dominio :P

En la [documentacion del CLI](https://vercel.com/docs/cli#commands/dns) estan los detalles de cada comando, y la propagaci&oacute;n de los Nameservers y los DNS records fue cuesti&oacute;n de un par de horas.
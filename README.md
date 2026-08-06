# Metalúrgica Chascomús

Sitio web institucional e informativo de Metalúrgica Chascomús.

El objetivo del proyecto es presentar los servicios del negocio, mostrar trabajos realizados y facilitar el contacto con potenciales clientes mediante WhatsApp.

## Servicios principales

* Portones automáticos y manuales.
* Rejas.
* Estructuras metálicas.
* Cortinas metálicas.
* Trabajos a medida.
* Reparaciones y mantenimiento.

## Tecnologías

* HTML5.
* CSS3.
* JavaScript.
* Tipografía externa **Barlow** / **Barlow Condensed** (Google Fonts, gratuita). Se
  utiliza para reforzar el carácter industrial de los títulos y mantener buena
  legibilidad en el cuerpo de texto. Se carga mediante `<link>` en `index.html`;
  requiere conexión a internet para verse con la tipografía definitiva (si no
  hay conexión, el sitio cae a una fuente de sistema y sigue siendo legible).

## Cómo visualizar el sitio

1. Abrir la carpeta del proyecto en Visual Studio Code.
2. Abrir el archivo `index.html`.
3. Utilizar la extensión Live Server o abrir el archivo directamente en el navegador.

Con Live Server:

1. Instalar la extensión **Live Server** en Visual Studio Code.
2. Hacer clic derecho sobre `index.html`.
3. Seleccionar **Open with Live Server**.

## Estructura del proyecto

```text
metalurgica-chascomus/
│
├── index.html
├── README.md
├── CLAUDE.md
│
├── css/
│   └── styles.css
│
├── js/
│   └── main.js
│
└── assets/
    ├── images/
    │   ├── logo/
    │   ├── inicio/
    │   └── trabajos/
    │
    └── icons/
```

## Información pendiente

Antes de publicar el sitio será necesario completar:

* Dirección.
* Teléfono.
* Número de WhatsApp.
* Correo electrónico.
* Usuario o enlace de Instagram.
* Logo definitivo (idealmente en PNG o SVG con fondo transparente real).
* Fotografías de trabajos realizados.

Los campos de datos de contacto pendientes deben mantenerse señalados dentro del código con el formato:

```text
[COMPLETAR ...]
```

### Imágenes de stock temporales

Las fotos usadas hoy en el hero, en "Nosotros" y en la galería de "Trabajos
realizados" son **fotos de stock temporales** (banco de imágenes gratuito,
licencia libre de uso comercial), no fotos reales de Metalúrgica Chascomús.
Están marcadas con comentarios en `index.html` y con textos `alt` que aclaran
que son "imagen de referencia (foto de stock temporal)". Hay que reemplazarlas
por fotos propias del negocio en cuanto estén disponibles, en:

* `assets/images/inicio/hero.jpg`
* `assets/images/nosotros/taller.jpg`
* `assets/images/trabajos/portones.jpg`
* `assets/images/trabajos/rejas.jpg`
* `assets/images/trabajos/estructuras-metalicas.jpg`
* `assets/images/trabajos/cortinas-metalicas.jpg`
* `assets/images/trabajos/trabajos-a-medida.jpg`
* `assets/images/trabajos/instalaciones.jpg`

## Contacto y horarios

Ubicación principal: Chascomús, Buenos Aires.

También se evalúan trabajos en otras localidades según las características de cada proyecto.

Horarios de atención:

* Lunes a viernes: 8:00 a 16:00.
* Sábados: 8:00 a 13:00.
* Domingos: cerrado.

## Estado del proyecto

Proyecto en etapa inicial de diseño y desarrollo.

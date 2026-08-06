# CLAUDE.md — Sitio web de Metalúrgica Chascomús

## 1. Descripción del proyecto

Este proyecto consiste en crear un sitio web institucional e informativo para **Metalúrgica Chascomús**, un negocio dedicado a la fabricación, instalación y reparación de productos y estructuras metálicas.

La página será principalmente visual. Su objetivo es mostrar los servicios del negocio, algunos trabajos realizados y facilitar que los potenciales clientes puedan comunicarse por WhatsApp.

No se necesita un sistema de usuarios, panel administrativo, base de datos, carrito de compras ni tienda online.

---

## 2. Objetivo principal

El sitio debe:

* Presentar profesionalmente a Metalúrgica Chascomús.
* Explicar de manera clara qué trabajos realiza.
* Mostrar imágenes de trabajos realizados.
* Transmitir experiencia, confianza, resistencia y calidad.
* Facilitar el contacto directo mediante WhatsApp.
* Mostrar los demás medios de contacto y horarios de atención.
* Adaptarse correctamente a computadoras y teléfonos celulares.

---

## 3. Tipo de sitio

Crear una página web institucional de tipo **landing page**, con navegación entre diferentes secciones dentro de la misma página.

El sitio será inicialmente estático y deberá poder visualizarse localmente desde Visual Studio Code.

Usar preferentemente:

* HTML5
* CSS3
* JavaScript

No incorporar frameworks, librerías o dependencias externas innecesarias.

El proyecto debe ser sencillo de ejecutar, mantener y modificar.

---

## 4. Identidad del negocio

### Nombre

**Metalúrgica Chascomús**

### Actividad

Fabricación, instalación y reparación de productos y estructuras metálicas.

### Público objetivo

El negocio trabaja con:

* Clientes particulares.
* Comercios.
* Empresas.
* Constructoras.
* Industrias.
* Instituciones.

Aunque está ubicado en Chascomús, puede realizar trabajos en otras localidades cuando el proyecto lo requiera.

---

## 5. Servicios principales

Incluir inicialmente los siguientes servicios:

* Portones automáticos y portones a motor.
* Portones manuales.
* Rejas.
* Estructuras metálicas.
* Cortinas metálicas.
* Trabajos de herrería.
* Fabricaciones metálicas a medida.
* Instalaciones.
* Reparaciones y mantenimiento.

La arquitectura del código debe permitir agregar nuevos servicios fácilmente.

No inventar especificaciones técnicas, años de experiencia, certificaciones, marcas utilizadas ni garantías que no hayan sido proporcionadas.

---

## 6. Estructura del sitio

El sitio debe incluir las siguientes secciones:

### 6.1 Encabezado

Incluir:

* Logo de Metalúrgica Chascomús.
* Nombre del negocio.
* Menú de navegación.
* Botón visible de contacto por WhatsApp.

El menú debe permitir navegar hacia:

* Inicio.
* Nosotros.
* Servicios.
* Trabajos.
* Contacto.

En dispositivos móviles, el menú debe transformarse en un menú desplegable o hamburguesa.

---

### 6.2 Sección de inicio

Debe ser la primera sección visible.

Incluir:

* Nombre del negocio.
* Una frase principal clara y profesional.
* Una breve descripción.
* Un botón para consultar por WhatsApp.
* Una imagen relacionada con trabajos metalúrgicos o una imagen provisoria fácilmente reemplazable.

Texto sugerido:

**Soluciones metálicas resistentes y a medida**

Descripción sugerida:

> Fabricamos e instalamos portones, rejas, estructuras metálicas, cortinas metálicas y soluciones personalizadas para hogares, comercios, empresas e industrias.

Botón principal:

**Solicitar presupuesto**

El botón debe abrir WhatsApp con un mensaje previamente escrito.

Mensaje sugerido:

> Hola, quisiera solicitar información y un presupuesto para un trabajo.

---

### 6.3 Sección Nosotros

Presentar brevemente al negocio.

Texto inicial sugerido:

> En Metalúrgica Chascomús realizamos trabajos de fabricación, instalación y reparación de estructuras y productos metálicos. Trabajamos tanto con clientes particulares como con comercios, empresas, constructoras e industrias, desarrollando soluciones adaptadas a las necesidades de cada proyecto.

Agregar también:

> Nos encontramos en Chascomús y evaluamos trabajos en otras localidades según las características de cada solicitud.

No incluir información no confirmada sobre la historia del negocio.

---

### 6.4 Sección Servicios

Mostrar los servicios mediante tarjetas visuales.

Cada tarjeta debe contener:

* Nombre del servicio.
* Breve descripción.
* Ícono o imagen.
* Posibilidad de consultar por WhatsApp.

Servicios iniciales:

#### Portones automáticos

Fabricación, instalación, automatización y reparación de portones para viviendas, comercios y establecimientos.

#### Rejas

Fabricación de rejas de protección y cerramientos adaptados a las medidas y características de cada espacio.

#### Estructuras metálicas

Diseño y fabricación de estructuras metálicas para proyectos particulares, comerciales e industriales.

#### Cortinas metálicas

Fabricación, instalación y reparación de cortinas metálicas para locales, depósitos, galpones y comercios.

#### Trabajos a medida

Desarrollo de soluciones metálicas personalizadas según las necesidades de cada cliente.

#### Reparaciones y mantenimiento

Reparación, ajuste y mantenimiento de portones, rejas, cortinas y estructuras existentes.

---

### 6.5 Sección Trabajos realizados

Crear una galería preparada para incorporar fotografías reales.

Inicialmente se pueden utilizar imágenes provisorias o bloques visuales con textos como:

* Portones.
* Rejas.
* Estructuras metálicas.
* Cortinas metálicas.
* Trabajos a medida.
* Instalaciones.

Las imágenes deben poder reemplazarse fácilmente desde una carpeta como:

```text
assets/images/trabajos/
```

Cada imagen debe tener:

* Texto alternativo.
* Categoría.
* Breve descripción opcional.

No utilizar imágenes de otros negocios ni incluir marcas de agua.

---

### 6.6 Sección Zona de trabajo

Informar que el negocio está ubicado en Chascomús, pero que también puede realizar trabajos en otras localidades.

Texto sugerido:

> Estamos ubicados en Chascomús y realizamos trabajos tanto en la ciudad como en otras localidades, según el tipo y alcance de cada proyecto. Comunicate con nosotros para consultar disponibilidad.

No indicar una zona máxima de cobertura mientras no esté confirmada.

---

### 6.7 Sección Contacto

Mostrar claramente:

* Dirección.
* Teléfono.
* WhatsApp.
* Correo electrónico.
* Instagram.
* Horarios de atención.

Usar campos provisorios fáciles de identificar y reemplazar:

```text
Dirección: [COMPLETAR DIRECCIÓN]
Teléfono: [COMPLETAR TELÉFONO]
WhatsApp: [COMPLETAR NÚMERO DE WHATSAPP]
Correo electrónico: [COMPLETAR CORREO]
Instagram: [COMPLETAR INSTAGRAM]
```

Horarios:

```text
Lunes a viernes: 8:00 a 16:00
Sábados: 8:00 a 13:00
Domingos: cerrado
```

No incluir un formulario de contacto.

El medio principal de consulta será WhatsApp.

---

### 6.8 Pie de página

Incluir:

* Logo o nombre de Metalúrgica Chascomús.
* Datos principales de contacto.
* Enlace a Instagram.
* Horarios resumidos.
* Enlaces de navegación.
* Año actual actualizado automáticamente mediante JavaScript.

Texto sugerido:

> © [AÑO ACTUAL] Metalúrgica Chascomús. Todos los derechos reservados.

---

## 7. WhatsApp

Incluir botones de WhatsApp en:

* Encabezado.
* Sección principal.
* Sección de servicios.
* Sección de contacto.
* Botón flotante visible durante la navegación.

Utilizar temporalmente el siguiente campo:

```text
[COMPLETAR NÚMERO DE WHATSAPP]
```

Cuando se cargue el número real, debe estar en formato internacional y sin espacios ni símbolos.

Ejemplo de estructura:

```text
https://wa.me/549XXXXXXXXXX?text=Hola%2C%20quisiera%20solicitar%20información%20y%20un%20presupuesto.
```

No utilizar todavía un número inventado.

---

## 8. Estilo visual

El estilo debe ser:

* Tradicional.
* Clásico.
* Industrial.
* Profesional.
* Serio.
* Robusto.
* Ordenado.

Evitar una apariencia excesivamente moderna, tecnológica, juvenil o informal.

### Colores sugeridos

Hasta contar con los colores definitivos del logo, utilizar una paleta provisoria basada en:

* Gris oscuro.
* Negro o grafito.
* Gris acero.
* Blanco o gris claro.
* Un color de acento sobrio.

El color de acento puede surgir posteriormente del logo.

No abusar de colores brillantes, degradados llamativos o animaciones.

### Tipografía

Utilizar una tipografía clara y profesional.

Priorizar:

* Buena legibilidad.
* Títulos firmes.
* Párrafos con espacio suficiente.
* Contraste adecuado.

### Elementos visuales

Se pueden usar:

* Texturas metálicas muy sutiles.
* Líneas rectas.
* Bordes definidos.
* Íconos simples.
* Tarjetas sobrias.
* Fotografías grandes de trabajos realizados.

Evitar:

* Efectos exagerados.
* Elementos flotantes innecesarios.
* Animaciones constantes.
* Diseños recargados.
* Exceso de sombras.

---

## 9. Logo e imágenes

El negocio ya cuenta con un logo.

Preparar el proyecto para guardarlo en:

```text
assets/images/logo/
```

Usar inicialmente una referencia como:

```text
assets/images/logo/logo-metalurgica-chascomus.png
```

Si el archivo todavía no existe, mostrar temporalmente el nombre del negocio como texto sin romper el diseño.

Las fotografías se incorporarán progresivamente.

El sitio debe funcionar aunque algunas imágenes todavía no hayan sido cargadas.

---

## 10. Diseño adaptable

El diseño debe funcionar correctamente en:

* Computadoras de escritorio.
* Notebooks.
* Tablets.
* Teléfonos celulares.

En teléfonos:

* Los textos no deben quedar demasiado pequeños.
* Los botones deben ser fáciles de tocar.
* Las tarjetas deben colocarse una debajo de otra.
* El menú debe ser compacto.
* El botón de WhatsApp debe permanecer accesible.
* Las imágenes no deben desbordar la pantalla.

---

## 11. Accesibilidad

Aplicar prácticas básicas de accesibilidad:

* Usar etiquetas HTML semánticas.
* Agregar atributos `alt` descriptivos a las imágenes.
* Mantener buen contraste.
* Asociar correctamente enlaces y botones.
* Permitir navegación mediante teclado.
* No usar texto demasiado pequeño.
* Agregar `aria-label` cuando sea necesario.

---

## 12. SEO básico

Incluir:

* Título de página.
* Meta descripción.
* Encabezados jerarquizados.
* Textos alternativos en imágenes.
* Etiquetas semánticas.
* Datos de ubicación y servicios en el contenido.

Título sugerido:

```text
Metalúrgica Chascomús | Portones, rejas y estructuras metálicas
```

Descripción sugerida:

```text
Metalúrgica en Chascomús especializada en portones automáticos, rejas, estructuras metálicas, cortinas metálicas y trabajos a medida.
```

---

## 13. Organización de archivos

Usar una estructura similar a:

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

Mantener separados:

* Contenido HTML.
* Estilos CSS.
* Comportamiento JavaScript.
* Imágenes.
* Íconos.

---

## 14. Calidad del código

El código debe ser:

* Claro.
* Ordenado.
* Comentado únicamente cuando aporte valor.
* Fácil de mantener.
* Fácil de editar por una persona con conocimientos básicos.
* Sin código duplicado innecesariamente.

Usar nombres de clases descriptivos.

No colocar todos los estilos directamente dentro del HTML.

No agregar dependencias sin explicar previamente para qué se necesitan.

---

## 15. Restricciones

No realizar las siguientes acciones sin autorización:

* No crear una tienda online.
* No agregar carrito de compras.
* No agregar medios de pago.
* No crear un panel administrativo.
* No crear registro o inicio de sesión.
* No conectar una base de datos.
* No implementar formularios que almacenen información.
* No publicar el sitio.
* No contratar servicios.
* No inventar información del negocio.
* No cambiar el nombre Metalúrgica Chascomús.
* No eliminar archivos existentes sin explicar el motivo.
* No sobrescribir el logo o las fotografías originales.
* No introducir frameworks innecesarios.

---

## 16. Forma de trabajo esperada

Antes de realizar cambios importantes:

1. Revisar la estructura actual del proyecto.
2. Explicar brevemente qué se va a modificar.
3. Mantener los archivos organizados.
4. Implementar los cambios de forma progresiva.
5. Comprobar que el sitio siga funcionando.
6. Informar qué archivos fueron creados o modificados.
7. Indicar cómo visualizar el resultado localmente.

Cuando falte información real del negocio, utilizar campos claramente marcados con:

```text
[COMPLETAR ...]
```

No reemplazar esos campos con información inventada.

---

## 17. Primera tarea

Crear la primera versión completa y navegable del sitio web de Metalúrgica Chascomús.

La primera versión debe incluir:

* Encabezado responsive.
* Sección de inicio.
* Sección Nosotros.
* Sección Servicios.
* Galería provisoria de trabajos.
* Sección Zona de trabajo.
* Sección Contacto.
* Pie de página.
* Botones de WhatsApp preparados.
* Diseño adaptable a celulares.
* Campos provisorios para los datos pendientes.
* Espacios preparados para incorporar el logo y las fotografías.

Antes de comenzar, revisar este archivo y respetar todas sus indicaciones.

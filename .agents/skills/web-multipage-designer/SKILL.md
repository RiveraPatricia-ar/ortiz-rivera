---
name: web-multipage-designer
description: >-
  Skill especializada para diseñar y desarrollar sitios web multipágina profesionales completos (index.html, nosotros.html, servicios.html, contacto.html, style.css, script.js, robots.txt, sitemap.xml, images/). Aplica estándares de diseño responsive, accesibilidad WCAG, SEO técnico, navegación clara, velocidad de carga y código modular. Exige un cuestionario previo antes de generar todos los archivos juntos desde el comienzo.
---

# 🌐 Web Multipage Designer Skill

Esta skill guía la creación de sitios web multipágina profesionales, robustos, accesibles y optimizados para motores de búsqueda (SEO).

---

## 🛑 FASE 1: Cuestionario de Descubrimiento (OBLIGATORIO)

**REGLA FUNDAMENTAL:** Antes de escribir o modificar código HTML, CSS o JS, DEBES realizar las siguientes preguntas al usuario para alinear los requerimientos del proyecto:

1. **Objetivo del Sitio Web:** ¿Cuál es el propósito principal del sitio (captar clientes B2B, vender servicios, presentar un negocio local, portafolio profesional)?
2. **Público Objetivo:** ¿A quién va dirigida la página (edad, rubro, país/región, hábitos digitales)?
3. **Identidad Visual y Estilo:**
   * ¿Tienen paleta de colores definida (códigos HEX o preferencia de colores)?
   * ¿Qué estilo visual prefieren (minimalista, corporativo, moderno, audaz, tradicional)?
   * ¿Hay alguna web de referencia o competencia que les guste?
4. **Estructura y Contenido Específico:**
   * **Inicio (`index.html`):** Propuesta de valor, llamado a la acción (CTA) principal, resumen de servicios, testimonios/clientes.
   * **Nosotros (`nosotros.html`):** Historia, misión, visión, valores, equipo.
   * **Servicios (`servicios.html`):** Detalle de cada servicio o producto, beneficios, preguntas frecuentes (FAQ).
   * **Contacto (`contacto.html`):** Formulario de contacto, dirección, teléfonos, horarios, integración con WhatsApp / mapa.
5. **Dominio y URL Base:** ¿Cuál será el dominio final (ej: `https://www.ejemplo.com.ar`) para configurar el `sitemap.xml` y `robots.txt`?

---

## 📁 FASE 2: Estructura de Archivos Obligatoria desde el Inicio

Una vez completado el cuestionario, **DEBES crear la carpeta del proyecto con TODOS sus archivos principales desde el primer momento**, garantizando que el sitio quede 100% completo y funcional sin depender de generaciones parciales posteriores:

```text
mi-pagina-web/
├── index.html          # Página principal / Inicio
├── nosotros.html       # Quiénes somos / Historia / Equipo
├── servicios.html      # Catálogo de servicios o productos
├── contacto.html       # Formulario, datos de contacto y mapa
├── robots.txt          # Configuración para rastreadores de motores de búsqueda
├── sitemap.xml         # Mapa del sitio para indexación en Google
├── style.css           # Hoja de estilos principal modular y responsive
├── script.js           # Menú responsive, validaciones e interactividades
└── images/             # Carpeta dedicada a logotipos e imágenes del sitio
```

---

## ⚡ FASE 3: Estándares de Calidad y Código

### 1. Accesibilidad (WCAG 2.1 & HTML5 Semántico)
* Usar etiquetas semánticas correctas: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`.
* Incluir enlace de salto a contenido principal (`<a href="#main-content" class="skip-link">Saltar al contenido principal</a>`).
* Atributos `alt` descriptivos en **todas** las imágenes.
* Contraste de colores adecuado entre texto y fondo.
* Navegación por teclado garantizada (`tabindex`, estados `:focus-visible` claros).
* Atributos ARIA (`aria-expanded`, `aria-label`, `aria-current="page"`) en menús navegables e interactivos.

### 2. SEO Técnico e Indexación
Cada archivo HTML debe incluir en su `<head>`:
* `<title>` único y descriptivo por página (máx. 60 caracteres).
* `<meta name="description">` persuasivo y único por página (120-155 caracteres).
* Metatags Open Graph (OG) y Twitter Cards para redes sociales.
* Etiquetas `<link rel="canonical" href="...">`.
* Encabezados con jerarquía lógica estricta (`<h1>` único por página, seguido de `<h2>`, `<h3>`).
* Vincular `style.css` con `<link rel="stylesheet" href="style.css">`.
* Vincular `script.js` con `<script src="script.js" defer></script>`.
* **`robots.txt`**: Permitir rastreo a buscadores y enlazar al `sitemap.xml`.
* **`sitemap.xml`**: Lista completa de las 4 páginas principales (`index.html`, `nosotros.html`, `servicios.html`, `contacto.html`) con sus prioridades.

### 3. Navegación Consistente
* Header y Footer unificados en todas las páginas.
* Marcador visual activo (`class="active"` o `aria-current="page"`) en el enlace del menú correspondiente a la página actual.
* Menú hamburguesa responsive para móviles con interacción fluida y accesible.

### 4. CSS Modular y Responsive (`style.css`)
* Uso de variables CSS (`:root`) para colores, fuentes, espaciados y sombras.
* Layout flexible utilizando CSS Flexbox y CSS Grid.
* Breakpoints estándar: `640px` (sm), `768px` (md), `1024px` (lg), `1280px` (xl).
* Normalización o CSS reset inicial (`box-sizing: border-box; margin: 0; padding: 0;`).

### 5. JavaScript Interactivo (`script.js`)
* Código JS limpio en modo estricto (`'use strict';`).
* Carga diferida con `defer`.
* Manejo del menú desplegable móvil.
* Validación nativa e interactiva del formulario de contacto.
* Smooth scroll para anclas internas.

---

## 🛠️ FASE 4: Verificación de Entrega Inicial

Al finalizar la primera ronda de generación de archivos, verifica que existan físicamente:
1. [ ] `index.html` (Inicio completo)
2. [ ] `nosotros.html` (Sección institucional)
3. [ ] `servicios.html` (Servicios detallados)
4. [ ] `contacto.html` (Formulario y datos de contacto)
5. [ ] `robots.txt` (SEO)
6. [ ] `sitemap.xml` (SEO)
7. [ ] `style.css` (Estilos)
8. [ ] `script.js` (Interactividad)
9. [ ] `images/` (Carpeta de recursos visuales)

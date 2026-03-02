# Waveless – Prueba Técnica Front-End

## 1. Introducción

Este proyecto consiste en la maquetación y desarrollo de la **home de un sitio ficticio**, siguiendo un diseño proporcionado en Figma.

El objetivo ha sido construir una página:

- 100% responsive (desktop, tablet y mobile)
- Funcional e interactiva
- Con buenas prácticas de accesibilidad
- Con una arquitectura limpia, escalable y mantenible

La implementación refleja mi forma habitual de trabajar en entornos profesionales Front-End.

---

# 2. Decisiones Técnicas

## 2.1 Framework: Angular (Standalone)

He elegido **Angular con standalone components** por los siguientes motivos:

- Arquitectura clara y estructurada por features.
- Escalabilidad real en proyectos medianos/grandes.
- Separación estricta entre vista, lógica y estilos.
- Uso de TypeScript como estándar fuerte de tipado.
- Experiencia profesional previa trabajando con Angular en producción.

La estructura del proyecto está organizada por features:

src/app
 ├── core
 ├── features
 │    └── home
 │         ├── components
 │         └── pages
 └── styles (ITCSS)

La aplicación está preparada para crecer sin necesidad de refactorizaciones estructurales.

---

## 2.2 Arquitectura CSS: ITCSS

He implementado **ITCSS (Inverted Triangle CSS Architecture)** porque:

- Permite escalar el CSS sin generar deuda técnica.
- Separa responsabilidades por capas.
- Evita colisiones y estilos impredecibles.
- Mantiene un orden lógico y jerárquico.

Estructura aplicada:
styles/
├── 00.settings → Variables, tokens, spacing
├── 01.tools → Mixins, media-queries
├── 02.generic → Reset
├── 03.elements → Estilos base HTML
├── 04.objects → Layouts (grid, wrappers)
├── 05.components → Componentes UI
└── 06.utilities → Helpers

He optado por ITCSS porque en una prueba técnica considero importante demostrar:

- Pensamiento arquitectónico
- Organización profesional
- Capacidad de escalar el proyecto

---

## 2.3 Sistema de Spacing y Escala

### Escala Base

El análisis inicial se realizó bajo la hipótesis de que el diseño seguía una **escala base 8px**.

Se implementó una función Sass para mantener coherencia:

```scss
$spaces: (
  0: 0,
  1: 8px,
  2: 16px,
  3: 24px,
  4: 32px,
  5: 40px,
  6: 48px,
  7: 64px
);

@function space($key) {
  @return map-get($spaces, $key);
}
```

## Decisión sobre tokenización semántica

Durante el análisis más profundo se detectó que el diseño no seguía estrictamente una escala pura en todos los casos.

Tokenizar absolutamente todo en variables semánticas (por ejemplo: `$space-section-xl`, `$space-card-padding-lg`, etc.) hubiera requerido:

- Re-análisis completo del diseño
- Redefinición de múltiples excepciones
- Más tiempo de refactorización

Dado el límite temporal de la prueba, opté por:

- Mantener una escala pura base.
- Resolver pequeñas excepciones mediante *micro-spacings justificados*.
- Priorizar coherencia estructural frente a sobreingeniería.

Esta decisión es consciente y estratégica.

---

## 2.4 ¿Por qué no se ha usado `rem`?

En este proyecto se ha trabajado principalmente con `px`.

**Motivos:**

- El diseño Figma está definido en píxeles.
- El objetivo era replicar el diseño *pixel-perfect*.
- El uso de `rem` hubiera requerido redefinir el `root font-size` y recalcular proporciones.

Dado el plazo de entrega, prioricé:

- Precisión visual.
- Velocidad de implementación.
- Coherencia directa con el diseño.

En un entorno productivo real, migraría fácilmente a `rem` mediante una función Sass y normalización del `root`.

---

## 2.5 Estrategia Responsive

Se han utilizado mixins propios para media queries:

```scss
@mixin up($bp) { 
  @media (min-width: $bp) { @content; } 
}

@mixin down($bp) { 
  @media (max-width: $bp) { @content; } 
}
```

### Estrategia aplicada

- Mobile-first en componentes clave.
- Adaptaciones progresivas hasta desktop.
- Layout principal gestionado con CSS Grid.
- Drawer de filtros activo hasta 1440px según diseño.

---

## 2.6 Acesibilidad

Se han aplicado buenas prácticas WCAG:

- Uso de HTML5 semántico (header, nav, main, article).
- alt descriptivos en imágenes.
- Skip link para navegación accesible.
- Uso correcto de botones frente a elementos clicables.
- Estados visuales coherentes.

No se ha implementado ARIA avanzado innecesario para evitar sobrecarga artificial.

---

## 3. Arquitectura y Flujo

### Estructura General de Componentes

App
 └── Home Page
      ├── HeaderComponent
      ├── HeroSliderComponent
      ├── AdventuresComponent
      │     ├── AdventureCardComponent
      │     └── FiltersSidebarComponent
      └── FooterComponent

### Flujo simplificado

AppComponent
    ↓
Router (Home)
    ↓
HomePage
    ↓
Componentes independientes
    ↓
Render UI
    ↓
Interacciones (TypeScript)
    ↓
Actualización del estado visual

Los componentes son independientes, sin acoplamiento innecesario, y preparados para escalar con servicios si fuese necesario.

---

## 4. Instalación y Ejecución

### Requisitos

- Node.js v18+
- Angular CLI

### Instalación

```bash
npm install
```

### Ejecutar en local

```bash
ng serve
```

Acceder en:

```bash
http://localhost:4200
```

---

## 5. Consideraciones Finales

Este proyecto prioriza:

- Arquitectura profesional
- Escalabilidad
- Organización del código
- Claridad estructural
- Coherencia técnica

Decisiones como no usar rem o no hiper-tokenizar el sistema de spacing han sido tomadas conscientemente en función del tiempo disponible, priorizando calidad estructural frente a complejidad innecesaria.

El resultado representa fielmente mi forma habitual de trabajar en proyectos Front-End profesionales.

---

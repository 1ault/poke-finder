# 🎮 Proyecto Semestral: PokéFinder - Aplicación Web con Consumo de API

## 🎯 Objetivos de Aprendizaje

Al completar este proyecto, el estudiante será capaz de:

1. **Consumir APIs REST** utilizando `fetch()` y manejar respuestas asíncronas con `async/await`
2. **Manipular el DOM** de forma dinámica usando JavaScript vanilla
3. **Implementar un sistema de caché** usando `localStorage` para optimizar peticiones
4. **Diseñar interfaces responsivas** aplicando CSS moderno (Flexbox, Grid, Variables CSS)
5. **Aplicar el patrón de módulos** (IIFE) para organizar código JavaScript
6. **Implementar manejo de eventos** con delegación de eventos
7. **Gestionar estado de aplicación** (favoritos, histórico) de forma persistente

---

## 📝 Descripción del Proyecto

Desarrollar una aplicación web llamada **"PokéFinder"** que permita buscar, explorar y comparar Pokémon utilizando la API pública de PokeAPI. La aplicación debe tener un diseño **Brutalist** (estilo crudo, bordes gruesos, colores vibrantes).

---

## 🔧 Funcionalidades Requeridas

### Nivel Básico (60 puntos)

#### 1. Búsqueda de Pokémon (15 pts)
- [ ] Campo de búsqueda por nombre o número
- [ ] Mostrar tarjeta con información del Pokémon:
  - Imagen (sprite)
  - Nombre y número
  - Tipos
  - Estadísticas base (HP, Attack, Defense, Sp. Attack, Sp. Defense, Speed)
- [ ] Manejo de errores (Pokémon no encontrado)
- [ ] Indicador de carga mientras se busca

#### 2. Sistema de Caché (15 pts)
- [ ] Guardar búsquedas en `localStorage`
- [ ] Verificar caché antes de hacer petición a la API
- [ ] Mostrar badge indicando origen de datos (API, Caché)
- [ ] Tiempo de expiración del caché (TTL de 24 horas)

#### 3. Histórico de Búsquedas (15 pts)
- [ ] Página separada para ver histórico
- [ ] Listar todos los Pokémon buscados (más recientes primero)
- [ ] Botón para eliminar individual del histórico
- [ ] Botón para limpiar todo el histórico y caché
- [ ] Click en item del histórico redirige a búsqueda

#### 4. Sistema de Favoritos (15 pts)
- [ ] Botón para agregar/quitar de favoritos (usar ícono de corazón ❤️)
- [ ] Página separada para ver favoritos
- [ ] Persistencia en `localStorage`
- [ ] Botón para limpiar todos los favoritos

### Nivel Intermedio (25 puntos)

#### 5. Cadena Evolutiva (10 pts)
- [ ] Mostrar la línea evolutiva completa del Pokémon
- [ ] Incluir sprites de cada etapa
- [ ] Indicar nivel o condición de evolución
- [ ] Click en evolución busca ese Pokémon

#### 6. Búsqueda por Habilidad (15 pts)
- [ ] Selector para cambiar tipo de búsqueda (Pokémon / Habilidad)
- [ ] Mostrar tarjeta de habilidad con:
  - Nombre de la habilidad
  - Descripción en español
  - Lista de Pokémon que tienen esa habilidad
- [ ] Click en Pokémon de la lista lo busca

### Nivel Avanzado (15 puntos)

#### 7. VS Battle - Comparador (15 pts)
- [ ] Página para comparar dos Pokémon lado a lado
- [ ] Comparación visual de estadísticas (barras)
- [ ] Sistema de efectividad de tipos
- [ ] Determinar ganador basado en stats y tipos
- [ ] Agregar a favoritos desde la vista VS

---

## 🎨 Especificaciones de Diseño

### Paleta de Colores (Variables CSS)

```css
:root {
    /* Colores principales */
    --color-bg: #f5e6d3;           /* Fondo beige */
    --color-primary: #2d2d2d;       /* Negro/Gris oscuro */
    --color-accent: #ffcc00;        /* Amarillo Pokémon */
    --color-secondary: #ff6b6b;     /* Rojo coral */
    
    /* Colores de estado */
    --color-success: #4ecdc4;       /* Verde agua */
    --color-error: #ff6b6b;         /* Rojo */
    --color-warning: #ffa500;       /* Naranja */
    
    /* Badges de origen */
    --color-api: #4ecdc4;           /* Verde agua - datos de API */
    --color-cache: #ffcc00;         /* Amarillo - datos cacheados */
    --color-expired: #ffa500;       /* Naranja - caché expirado */
    
    /* Bordes y sombras */
    --border-width: 4px;
    --border-color: #2d2d2d;
    --shadow: 6px 6px 0px #2d2d2d;
    
    /* Tipografía */
    --font-family: 'Courier New', monospace;
}
```

### Estilo Brutalist

- **Bordes gruesos** (4px sólidos negros)
- **Sombras duras** (sin blur, offset de 6px)
- **Tipografía monoespaciada** (Courier New)
- **Botones con efecto de presión** (transform en hover/active)
- **Colores contrastantes y vibrantes**
- **Sin bordes redondeados** (máximo 4px)

### Estructura de Navegación

```
📁 Proyecto
├── index.html          (Búsqueda principal)
├── historico.html      (Histórico de búsquedas)
├── favoritos.html      (Lista de favoritos)
├── vs.html             (Comparador VS)
├── shared.css          (Estilos compartidos)
└── shared.js           (Módulo de almacenamiento)
```

---

## 🌐 API a Utilizar

### PokeAPI (https://pokeapi.co/)

**Base URL:** `https://pokeapi.co/api/v2/`

#### Endpoints Requeridos:

| Endpoint | Uso | Ejemplo |
|----------|-----|---------|
| `/pokemon/{name or id}` | Datos básicos del Pokémon | `/pokemon/pikachu` o `/pokemon/25` |
| `/pokemon-species/{name or id}` | Datos de especie (evolución) | `/pokemon-species/pikachu` |
| `/evolution-chain/{id}` | Cadena evolutiva completa | `/evolution-chain/10` |
| `/ability/{name or id}` | Información de habilidad | `/ability/static` |

#### Ejemplo de Respuesta `/pokemon/pikachu`:

```json
{
  "id": 25,
  "name": "pikachu",
  "sprites": {
    "front_default": "https://raw.githubusercontent.com/.../25.png"
  },
  "types": [
    { "type": { "name": "electric" } }
  ],
  "stats": [
    { "base_stat": 35, "stat": { "name": "hp" } },
    { "base_stat": 55, "stat": { "name": "attack" } },
    { "base_stat": 40, "stat": { "name": "defense" } },
    { "base_stat": 50, "stat": { "name": "special-attack" } },
    { "base_stat": 50, "stat": { "name": "special-defense" } },
    { "base_stat": 90, "stat": { "name": "speed" } }
  ],
  "abilities": [
    { "ability": { "name": "static" } }
  ]
}
```

---

## 📊 Tabla de Efectividad de Tipos (Para VS Battle)

Para el sistema VS, implementar la siguiente lógica de efectividad:

| Tipo Atacante | Super Efectivo (2x) | No muy efectivo (0.5x) | Sin efecto (0x) |
|---------------|---------------------|------------------------|-----------------|
| Fire | Grass, Ice, Bug, Steel | Fire, Water, Rock, Dragon | - |
| Water | Fire, Ground, Rock | Water, Grass, Dragon | - |
| Electric | Water, Flying | Electric, Grass, Dragon | Ground |
| Grass | Water, Ground, Rock | Fire, Grass, Poison, Flying, Bug, Dragon, Steel | - |
| ... | | | |

**Referencia completa:** https://pokemondb.net/type

---

## 📐 Rúbrica de Evaluación

| Criterio | Excelente (100%) | Bueno (75%) | Regular (50%) | Deficiente (25%) |
|----------|------------------|-------------|---------------|------------------|
| **Funcionalidad** | Todas las funciones operan correctamente | Funciones principales operan, errores menores | Algunas funciones no operan | Funcionalidad básica incompleta |
| **Diseño Brutalist** | Sigue guía de estilo completamente | Mayoría de estilos aplicados | Estilos parcialmente aplicados | No sigue el estilo |
| **Código Limpio** | Bien organizado, comentado, modular | Organizado con algunos comentarios | Parcialmente organizado | Código desorganizado |
| **Manejo de Errores** | Todos los errores manejados con UX clara | Mayoría de errores manejados | Algunos errores manejados | Sin manejo de errores |
| **Caché/Storage** | Sistema completo con TTL y limpieza | Sistema funcional básico | Implementación parcial | No implementado |

---

## 📚 Recursos de Apoyo

### Documentación
- [PokeAPI Documentation](https://pokeapi.co/docs/v2)
- [MDN - Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
- [MDN - localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
- [MDN - Event Delegation](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events#event_delegation)

### Herramientas
- [PokeAPI Sprite URLs](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png)
- [Pokemon Type Colors](https://pokemondb.net/type)

---

## ⚠️ Restricciones

1. **NO usar frameworks** (React, Vue, Angular, etc.)
2. **NO usar jQuery** - Solo JavaScript vanilla
3. **NO usar Bootstrap** - CSS personalizado siguiendo el estilo Brutalist
4. **NO copiar código** de compañeros o internet sin citar fuente
5. **SÍ permitido** usar íconos emoji y fuentes web básicas

---

## 📤 Entrega

1. Subir el proyecto a un repositorio **GitHub**
2. Habilitar **GitHub Pages** para demostración
3. Incluir archivo `README.md` con:
   - Nombre del estudiante
   - Instrucciones de uso
   - Capturas de pantalla
   - Link a GitHub Pages
4. Enviar link del repositorio por Microsoft Teams

---

## 🏆 Bonus (Puntos Extra)

- **+5 pts:** Implementar tema oscuro/claro con toggle
- **+5 pts:** Implementar búsqueda con autocompletado
- **+5 pts:** Agregar sonidos de Pokémon al buscar

---

## ❓ Preguntas Frecuentes

**P: ¿Puedo usar una API diferente?**
R: No, el proyecto debe usar PokeAPI para estandarizar la evaluación.

**P: ¿Puedo cambiar los colores?**
R: Los colores base deben mantenerse.

**P: ¿Puedo trabajar en equipo?**
R: Si, de 2 y 3. Nadie individual, nadie en grupo de 4+.

---

**¡Buena suerte y que la fuerza de los Pokémon te acompañe! ⚡🔥💧**
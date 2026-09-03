# Buen gusto al diseñar con IA — métodos, habilidades y reglas

Guía práctica escrita para este proyecto, a partir de cuatro fuentes que coinciden en
lo esencial: el vídeo *The 4 Levels of AI App Design* (Tim Gabe), los ensayos de Emil
Kowalski (*Developing Taste*, *Agents with Taste*), la skill `frontend-design` de
Anthropic y el libro *Refactoring UI* (Wathan y Schoger). Las decisiones concretas para
este sitio están en [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md).

## 1. La idea central: la IA produce el promedio

Un modelo, ante un encargo vago, devuelve lo más probable: el promedio de millones de
plantillas. Eso es el "AI slop": limpio, correcto y olvidable. Cada modelo nuevo sube el
suelo, pero **sigue siendo el promedio**. Lo que diferencia no es el modelo, es la
*dirección* que se le da.

Los cuatro niveles del vídeo, con su puntuación (punto de vista / consistencia /
ejecución, cada uno sobre 5):

| Nivel | Qué se hace | Resultado | Puntos |
|---|---|---|---|
| 1 | Un prompt, "hazlo premium" | Limpio, vacío, igual a todos | 5 / 15 |
| 2 | Se le da vocabulario: un sistema de diseño, skill files | Más deliberado, mejor espaciado | 8 / 15 |
| 3 | Se le mete *todo*: diez referencias, tres sistemas, capturas de apps famosas | **Frankenstein**: nada casa, peor que el nivel 1 | 4 / 15 |
| 4 | Una persona con una idea decide **qué quitar** y la IA amplifica | Carácter, una sola idea en cada pantalla | 15 / 15 |

Lección: **más contexto no es mejor contexto**. Una dirección, aplicada con disciplina,
supera a veinte referencias apiladas.

## 2. Qué es el gusto y cómo se entrena (Kowalski)

El gusto no es preferencia personal: es *un instinto entrenado*. Tres métodos:

1. **Rodearse de trabajo excelente.** Elegir cinco o seis referentes y mirar su trabajo
   con atención, no cien capturas en Pinterest. Para este proyecto los referentes son:
   los cursos de Christophe Bertault (que MathDocs reproduce), *The Elements of
   Typographic Style* (Bringhurst), y las interfaces de Linear y Stripe como ejemplo
   de restricción.
2. **Analizar en vez de reaccionar.** Nunca "esto es bonito / feo". Siempre "esto
   funciona *porque*…": la versalita azul separa la jerarquía sin aumentar el tamaño; el
   punto-pestaña de la caja identifica la familia antes de leer la etiqueta; el mono en
   los números alinea las cifras. Cada decisión de gusto tiene una razón lógica si se
   mira de cerca.
3. **Practicar y pedir crítica.** Al principio el juicio va por delante de la mano (el
   *taste gap*): se nota que algo está mal antes de saber arreglarlo. Es normal; se
   cierra con repeticiones.

## 3. Cómo transferir el gusto a la IA

### 3.1 Un skill file por aspecto, con el *porqué*

Un skill file es un documento corto que la IA lee antes de trabajar. Debe contener:

- **Reglas estrictas y medibles**, no adjetivos. "Cuerpo a 66ch máximo", "animaciones
  bajo 300 ms", "un botón principal por pantalla". Nunca "que sea elegante".
- **La razón de cada regla.** Sin el porqué, la IA no sabe cuándo la regla no aplica.
- **Tablas problema → solución.** "El elemento aparece de la nada → empieza en
  `scale(.95)`, no en `scale(0)`."
- **Árboles de decisión** para lo que se repite. "¿Entra o sale del viewport? Entra →
  `ease-out`; sale → `ease-in`."
- **Antes / después** con el mismo contenido, para que vea cómo se aplica.

`DESIGN_SYSTEM.md` sigue exactamente este formato.

### 3.2 Flujo en dos pasadas (skill `frontend-design`)

1. **Planificar** sin escribir código: 4–6 colores con nombre y rol, dos familias
   tipográficas con su papel, una frase por sección + un wireframe ASCII, y el
   *principio de unicidad* (qué hace que esto sea de este autor y no de otro).
2. **Revisar contra lo genérico** antes de construir: si algún elemento del plan
   podría estar en cualquier otro sitio, se cambia. Solo después se escribe el CSS.

### 3.3 Sistemas antes que creatividad (Refactoring UI)

- **Diseñar primero en escala de grises.** Si la jerarquía no se sostiene sin color, el
  color no la arreglará. El color se añade al final y con un rol.
- **Escalas cerradas**: espaciado (4 8 12 16 24 32 48 64 96), tipos (una escala
  modular), sombras (dos o tres), colores (tintes de una misma familia, nunca un
  matiz nuevo). Elegir de una lista corta evita el "un píxel más" infinito.
- **Jerarquía con peso y color, no solo con tamaño.** Un título más pequeño pero en
  negrita y en `--blue` manda más que uno grande y gris.
- **Empezar con demasiado aire** y quitar.

### 3.4 Gastar la audacia en un solo sitio

Un elemento memorable por página; el resto, silencio. En este sitio es la figura
interactiva de la derivada. Si todo llama la atención, nada lo hace.

## 4. Patrones que delatan "AI slop" (y su corrección)

| Patrón | Por qué es slop | Corrección |
|---|---|---|
| Degradado violeta → azul, "glassmorphism" | Es el promedio de 2023 | Un color plano con rol |
| Tres tarjetas iguales en fila con sombra y borde gris | Kit SaaS de plantilla | Texto corrido con filetes, o una lista real |
| Inter en todas partes | El 47 % de la salida de IA lo usa; es invisible | Una serif con carácter (Charter/Charis, Source Serif) |
| Eyebrows en MAYÚSCULAS con tracking, puntos medios `·`, flechas `→` al final de los enlaces | Cromo de plantilla | Quitar; el enlace ya es un enlace |
| Fondo crema `#F4F1EA` + serif + terracota | El "anti-slop" ya convertido en slop | Papel blanco de verdad |
| Fondo casi negro con verde ácido | Ídem | — |
| Iconos genéricos junto a cada título | Decoración sin información | Quitar; un icono solo si sustituye texto |
| Números enormes ("+500 h") con etiqueta pequeña | Hero de plantilla | Escribir la cifra dentro de una frase |
| Animaciones al hacer scroll | Ruido | Solo lo que el usuario provoca |
| Modo oscuro que nadie pidió | Duplica el trabajo, rompe la idea de "papel" | No |
| Texto de relleno ("Solutions innovantes pour…") | La IA escribiendo por el autor | La voz del autor, frases concretas |

## 5. Lista de control (la tarjeta de puntuación del vídeo)

Antes de dar por terminada una página, puntuar de 1 a 5:

- **Punto de vista.** ¿Podría decir en una frase de qué va el diseño? ¿Se nota en
  *cada* pantalla, no solo en la portada?
- **Consistencia.** ¿Los mismos tokens, los mismos componentes, la misma voz en la
  página 5 que en la 1? ¿Hay algún color, tamaño o radio fuera de las escalas?
- **Ejecución.** ¿Hay una decisión que solo un humano que conoce al usuario habría
  tomado? (Aquí: el alumno puede *mover el punto* y ver la pendiente; el padre ve
  "point avec les parents" en cada oferta de collège/lycée.)

Menos de 12/15 → no publicar todavía.

## 6. Lo que MathDocs ya hace bien, y por qué

Vale la pena entender estas decisiones porque son el modelo del sitio:

| Decisión en MathDocs | Razón |
|---|---|
| Papel blanco puro, tinta `#111` (no negro puro) | Contraste máximo sin el "brillo" del negro absoluto sobre blanco |
| Títulos de sección en versalitas azules con un cuadrado a la izquierda | Jerarquía por color y forma, no por tamaño; el cuadrado se ve en la periferia al hojear |
| Una familia de color por tipo de caja (verde definición, violeta teorema, ladrillo método, azul ejemplo, rojo atención) | El lector identifica el tipo de contenido antes de leerlo; el color *significa* |
| Dentro de cada familia, cuatro tonos con jerarquía de luminancia fija (etiqueta oscura, borde medio, pestaña clara, fondo casi blanco) | Un solo sistema para todas las cajas; añadir una familia nueva es elegir un matiz, no rediseñar |
| Etiqueta en negrita + título entre paréntesis en tinta | Dos niveles de énfasis con una sola fuente |
| Mono solo para código y cifras | La forma de la letra dice qué tipo de dato es |
| Filetes grises, nunca sombras | Un documento se imprime; la pantalla hereda esa honestidad |

## 7. Rutina de trabajo con la IA para este repo

1. Leer `DESIGN_SYSTEM.md`. Si la petición contradice el sistema, cambiar primero el
   sistema (una línea), después el código.
2. Pedir cambios *pequeños y nombrados*: "la caja Méthode de la página Offres", no
   "mejora la página".
3. Después de cada cambio, capturas a 1280 y 390 px y pasar la lista de control.
4. Commit por tema. Nunca "mejoras varias".
5. Cuando algo "no acaba de estar bien" y no se sabe por qué: volver a escala de
   grises (quitar todos los colores en DevTools) y mirar si la jerarquía sigue en pie.

## Fuentes

- Tim Gabe, *The 4 Levels of AI App Design* — https://www.youtube.com/watch?v=YS7uOXjmJTA
- Emil Kowalski, *Developing Taste* — https://emilkowal.ski/ui/developing-taste
- Emil Kowalski, *Agents with Taste* — https://emilkowal.ski/ui/agents-with-taste
- Anthropic, skill `frontend-design` — https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md
- Resumen de *Refactoring UI* — https://www.sglavoie.com/posts/2023/09/09/book-summary-refactoring-ui/
- Guías anti-slop 2026 — https://vibecodekit.dev/ai-slop-design , https://www.925studios.co/blog/ai-slop-web-design-guide
- Paleta y tipografía: `MathDocs/tex/themes/bertault/colors.sty`, `mathdraw/themes/mathdocs.json`

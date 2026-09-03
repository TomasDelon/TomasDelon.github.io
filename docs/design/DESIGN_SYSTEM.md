# Sistema de diseño del sitio — "un cours bien mis en page"

Este archivo es la *dirección artística* del sitio. Cualquier persona o IA que toque
`assets/styles.css` o una página HTML debe leerlo antes y obedecerlo. Si una decisión
no está aquí, se decide una vez, se escribe aquí y se aplica en todas las páginas.

## 1. Punto de vista (la única idea)

**El sitio es un documento MathDocs.** La misma hoja blanca, la misma tipografía
Charter, los mismos títulos de sección azules en versalitas con su cuadrado, las mismas
cajas con significado (definición, teorema, método, atención). Un alumno que abre un
PDF de Tomas y luego su sitio debe sentir que es el mismo autor.

Consecuencias:

- **La audacia se gasta en un solo sitio**: la figura interactiva de la derivada en la
  portada. Es lo único que ningún otro profesor particular tiene. Todo lo demás es
  tranquilo, como el interior de un curso.
- **Cada color tiene un rol**, nunca es decoración. Si un color aparece, significa algo
  (sección, definición, método, atención, correcto/incorrecto).
- **Los dispositivos estructurales codifican información**: un número solo aparece si
  la lista es realmente secuencial; una caja solo aparece si el contenido es una unidad
  con nombre (Définition, Méthode, Exemple, Attention).
- **Nada de "sitio de startup"**: sin degradados, sin sombras en tarjetas, sin iconos,
  sin emojis, sin fotos de stock, sin modo oscuro, sin animaciones de scroll.

## 2. Tokens

Todos viven en `:root` de `assets/styles.css`. Los valores vienen de
`MathDocs/tex/themes/bertault/colors.sty` y `mathdraw/themes/mathdocs.json`.

### Color

| Token | Hex | Rol (de MathDocs) |
|---|---|---|
| `--paper` | `#FFFFFF` | fondo de página (bertault.paper) |
| `--paper-2` | `#F7F8F6` | fondo de caja formal / cabecera de tabla |
| `--ink` | `#111111` | texto (bertault.text) |
| `--ink-soft` | `#4A4A46` | texto secundario (bertault.text.soft) |
| `--rule` | `#B7B7B7` | filetes (bertault.rule) |
| `--rule-soft` | `#D7D7D7` | filetes suaves (figure.gray.soft) |
| `--blue` | `#476B99` | títulos de sección, enlaces, botón principal, etiqueta Exemple/Remarque |
| `--blue-badge` | `#758FB2` | cuadrado de sección |
| `--blue-soft` | `#DCE5EF` | relleno suave azul (figure.blue.soft) |
| `--blue-pale` | `#EFF4F9` | fondo de nota azul |
| `--green-label` / `--green-border` / `--green-tab` | `#53664B` / `#7C8B76` / `#97A392` | caja **Définition** (formal) |
| `--violet-label` / `--violet-border` / `--violet-tab` / `--violet-bg` | `#6C5B80` / `#9C8FB0` / `#B8A8C9` / `#F6F3F9` | caja **Théorème / Proposition** |
| `--brick-label` / `--brick-border` / `--brick-tab` / `--brick-bg` | `#904F3A` / `#C86E50` / `#DE8A6F` / `#FDF6F4` | caja **Méthode** |
| `--red` | `#BB4646` | **Attention**, error, "faux" |
| `--red-bg` / `--red-border` | `#FFF8F8` / `#C15858` | caja de afirmación falsa |
| `--ok` / `--ok-text` | `#5E8B68` / `#3E6F4A` | correcto |
| `--fig-blue` / `--fig-red` / `--fig-violet` / `--fig-gray` / `--fig-grid` | `#476B99` / `#B64A4A` / `#8E73A8` / `#5B5B5B` / `#C8C8C8` | figuras y demos (curva, tangente, secundario, ejes, cuadrícula) |

Proporción aproximada en pantalla: 90 % papel y tinta, 8 % azul, 2 % el resto.
**Prohibido** introducir un hex que no esté en esta tabla.

### Tipografía

| Rol | Fuente | Por qué |
|---|---|---|
| Texto, títulos | **Charis SIL** (Google Fonts), 400/700 + cursiva | Derivada de Bitstream Charter, misma familia que XCharter de MathDocs. Legible en pantalla, con versalitas reales (`smcp`). |
| Números, código, lecturas de demo | **IBM Plex Mono** 400/500 | Uno de los perfiles mono validados en MathDocs. |

Escala (html = 106.25 % → 17 px):

| Elemento | Tamaño | Peso | Detalles |
|---|---|---|---|
| `h1` | `clamp(1.9rem, 3.3vw, 2.5rem)` | 700 | interlineado 1.12, sin versalitas |
| `h2` (título de sección) | `1.35rem` | 700 | **versalitas, color `--blue`, cuadrado `--blue-badge` a la izquierda** (firma Bertault) |
| `h3` | `1.15rem` | 700 | tinta |
| `h4` | `1rem` | 700 | tinta |
| cuerpo | `1rem` / 1.55 | 400 | medida máxima `66ch` |
| `.lead` | `1.15rem` / 1.5 | 400 | |
| `.small` | `.875rem` | | |
| mono | `.85em` | | |

Reglas: una sola familia serif; nada de mayúsculas sostenidas con tracking ("eyebrows");
nada de resaltar una palabra del titular en color; enlaces subrayados finos
(`text-decoration-thickness: 1px; text-underline-offset: 3px`).

### Espacio

Escala en px: `4 8 12 16 24 32 48 64 96` → `--s1 … --s9`.
Sección: `--s8` arriba/abajo en escritorio, `--s7` en móvil. Ancho máximo `1040px`,
columna de texto `720px`. Empezar con demasiado aire y quitar; nunca al revés.

### Radios y bordes

Radio único `6px` (las cajas MathDocs son ligeramente redondeadas). Bordes `1px`.
Sin sombras salvo `0 1px 0 rgba(0,0,0,.04)` en la figura interactiva.

## 3. Componentes

### Título de sección (`h2`)

```
■  Pour qui
```
Cuadrado `.8em` de `--blue-badge`, texto en versalitas `--blue`. Es *la* firma visual.
Se usa para todo `h2`; jamás para `h3`.

### Cajas con significado (`.box`)

Estructura común: fondo pálido, borde 1px, radio 6px, pestaña-punto a la izquierda del
título, etiqueta en negrita del color de la familia, título entre paréntesis en tinta.

| Clase | Familia | Cuándo |
|---|---|---|
| `.box--def` | verde | definir qué es algo (una oferta, un soporte) |
| `.box--thm` | violeta | un compromiso o una afirmación fuerte ("ce que vous recevez") |
| `.box--meth` | ladrillo | un procedimiento ("comment je travaille", "une séance type") |
| `.box--note` | azul | ejemplo, observación, demo |
| `.box--warn` | rojo | límite explícito ("je ne code pas à votre place") |

Nunca dos cajas de la misma familia seguidas sin texto corrido entre ellas.

### Lista numerada de etapas (`.etapes`)

Solo para secuencias reales. Número en mono `--blue`, filete `--rule-soft` entre etapas.

### Botones

`.btn`: fondo `--blue`, texto papel, radio 6px, sin sombra. `.btn-secondary`: borde `--blue`,
texto `--blue`. Un solo `.btn` principal por pantalla. Texto en infinitivo concreto:
"Me contacter", "Voir les offres", nunca "Envoyer" a secas → "Envoyer le message".

### Figura interactiva (`.figure`)

Papel blanco, borde `--rule-soft`, la cuadrícula dentro del canvas usa `--fig-grid` al
55 %, curva `--fig-blue` 2.2px, tangente `--fig-red` 2px, punto 4.3pt. Leyenda en mono.
Es el único lugar con sombra sutil.

### Tabla (`.table`)

Cabecera con fondo `--paper-2`, filetes `--rule`, sin zebra.

## 4. Movimiento

Ninguno salvo: subrayado al pasar el ratón, transición de 150 ms en botones, y lo que
el usuario provoca en las demos. `prefers-reduced-motion` desactiva las transiciones.

## 5. Lista de control antes de publicar

- [ ] ¿Se lee como un documento de Tomas? (papel, Charter, títulos azules con cuadrado)
- [ ] ¿Hay algún color fuera de la tabla? → quitar.
- [ ] ¿Hay un `h2` sin cuadrado o un `h3` con cuadrado? → corregir.
- [ ] ¿Alguna caja sin significado (usada como decoración)? → convertir en texto.
- [ ] ¿Más de un botón principal por pantalla? → degradar a `.btn-secondary`.
- [ ] ¿Texto que supere 66ch? → limitar.
- [ ] Móvil 390px: nada se desborda, la figura se apila bajo el texto.
- [ ] Teclado: foco visible (`outline: 2px solid var(--blue)`).
- [ ] Sin consola de errores; `site-config.js` rellenado.

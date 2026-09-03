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
| `--def-bg` / `--def-border` / `--def-badge` / `--def-label` | `#F7F8F6` / `#7C8B76` / `#97A392` / `#53664B` | callout **Définition** |
| `--thm-bg` / `--thm-border` / `--thm-badge` / `--thm-label` | `#F6F3F9` / `#9C8FB0` / `#B8A8C9` / `#6C5B80` | callout **Théorème / Proposition / Engagement** |
| `--meth-bg` / `--meth-border` / `--meth-badge` / `--meth-label` | `#FDF6F4` / `#C86E50` / `#DE8A6F` / `#904F3A` | callout **Méthode** |
| `--code-bg` / `--code-border` / `--code-badge` / `--code-label` | `#F5F5F7` / `#ADB0BB` / `#545B72` / `#545B72` | callout **Code**, bloque de pseudo-código |
| `--red` | `#BB4646` | línea **Attention**, error |
| `--ok` | `#5E8B68` | correcto |
| `--fig-blue` / `--fig-red` / `--fig-violet` / `--fig-gray` / `--fig-grid` | `#476B99` / `#B64A4A` / `#8E73A8` / `#5B5B5B` / `#C8C8C8` | figuras y demos (curva, tangente, secundario, ejes, cuadrícula) |

Proporción aproximada en pantalla: 90 % papel y tinta, 8 % azul, 2 % el resto.
**Prohibido** introducir un hex que no esté en esta tabla.

### Tipografía

| Rol | Fuente | Por qué |
|---|---|---|
| Texto, títulos | **XCharter** 400/700 + cursivas, autoalojada en `assets/fonts/` (OTF de TeX Live) | La misma fuente que los PDF de MathDocs, sin aproximaciones. Licencia Bitstream Charter, ver `assets/fonts/README.md`. |
| Números, código, lecturas de demo | **IBM Plex Mono** 400/500 (Google Fonts) | Uno de los perfiles mono validados en MathDocs. |

**Mobile first.** Los estilos base son los del teléfono; `@media (min-width: 720px)` añade lo de escritorio. Nunca al revés.

| Elemento | Teléfono | ≥ 720 px | Detalles |
|---|---|---|---|
| cuerpo | `18px` / 1.42 | `19px` / 1.42 | medida máxima `64ch`; el papel usa 1.28, la pantalla necesita más aire |
| `h1` (título de página) | `1.85rem` | `2.3rem` | **versalitas tracked 0.018em**, como el título de un documento MathDocs |
| `h1.hero-title` (frase de portada) | `1.75rem` | `2.25rem` | sin versalitas: es una frase, no un título |
| `h2` (`\bloc`) | `1.5rem` | `1.848rem` | versalitas `--blue`; **insignia cuadrada numerada** `1.33em`, radio 0.139·lado, número 0.69em blanco, 1.07em de aire; márgenes 0.79em / 0.99em. Los números son la lectura en orden de un documento |
| `h3` | `1.2rem` | | tinta |
| `.lead` | `1.08em` | | máx. 50ch |
| mono | `.82em` | | |

Reglas: una sola familia serif; nada de mayúsculas sostenidas con tracking ("eyebrows");
nada de resaltar una palabra del titular en color; enlaces subrayados finos
(`text-decoration-thickness: 1px; text-underline-offset: 3px`).

### Espacio

Escala en px: `4 8 12 16 24 32 48 64 96` → `--s1 … --s9`.
Sección: `--s8` arriba/abajo en escritorio, `--s7` en móvil. Ancho máximo `1040px`,
columna de texto `720px`. Empezar con demasiado aire y quitar; nunca al revés.

### Radios y bordes

Callouts y figuras: radio `0.57em` (2 mm). Botones, campos, retratos: `6px`. Bordes `1px`.
Sin sombras salvo `0 1px 0 rgba(0,0,0,.04)` en la figura interactiva.

## 3. Componentes

### Título de sección (`h2`, `\bloc` de MathDocs)

```
[1]  Pour qui
```
Insignia cuadrada `--blue-badge` de 1.33em con el número de sección en blanco, luego el
título en versalitas `--blue`. Es *la* firma visual. Numeración automática por página
(contador CSS). Se usa para todo `h2`; jamás para `h3`.

### Callouts MathDocs (`.callout`)

Copia exacta de `tex/components/bt_course_formal_geometry.sty`, en em del cuerpo de la caja:

```
┌─────────────────────────────────────────────┐  filete 1px (0.30pt), radio 0.57em (2mm)
▪  Définition  Continuité uniforme  Soit I une  │  ← insignia 0.68em, radio 0.135em, centrada
│  partie de ℝ et soit f : I → ℝ. On dit que…   │    sobre el filete a 1.65em del borde superior,
└─────────────────────────────────────────────┘    con una máscara papel de 1.135em que corta el filete
```

- Relleno: `0.765em` arriba/derecha/abajo, `1.32em` a la izquierda. Interlineado 1.32.
- **La etiqueta, el título y el cuerpo van en la misma línea**: `<b class="callout-kind">`
  (negrita, color de la familia, 0.55em de aire) + `<b class="callout-title">` (negrita,
  tinta, 0.6em) + texto. Sin paréntesis, sin línea de cabecera aparte.
- Márgenes 0.9em / 0.75em (before/after skip).

| Clase | Familia | Cuándo |
|---|---|---|
| `.callout--def` | verde | definir qué es algo |
| `.callout--thm` | violeta | un compromiso o una afirmación fuerte ("Engagement") |
| `.callout--meth` | ladrillo | un procedimiento ("Méthode") |
| `.callout--code` | pizarra | código |

### Líneas sin caja (`.line`)

`\BTBlueLine`: `<p class="line"><b class="line-kind">Exemple</b> texto…</p>`. Etiqueta
negrita azul, 0.45em, texto corrido. `.line--warn` pone la etiqueta en rojo con una ✕
delante ("Attention"). En MathDocs **Exemple, Remarque, Démonstration y Attention nunca
llevan caja**; el sitio tampoco. Sirve para las leyendas de las figuras.

Nunca dos callouts de la misma familia seguidos sin texto corrido entre ellos.

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
- [ ] ¿Hay un `h2` sin insignia numerada o un `h3` con ella? → corregir.
- [ ] ¿Algún callout sin significado, o un "Exemple/Attention" metido en caja? → convertir en `.line`.
- [ ] ¿El callout tiene etiqueta + título + cuerpo en la misma línea? Si la etiqueta va sola en una línea, está mal.
- [ ] ¿Más de un botón principal por pantalla? → degradar a `.btn-secondary`.
- [ ] ¿Texto que supere 66ch? → limitar.
- [ ] Móvil 390px: nada se desborda, la figura se apila bajo el texto.
- [ ] Teclado: foco visible (`outline: 2px solid var(--blue)`).
- [ ] Sin consola de errores; `site-config.js` rellenado.

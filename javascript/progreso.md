# Progreso — JavaScript

## Plan de estudios
- [ ] Fase 1 — Fundamentos del lenguaje
- [ ] Fase 2 — El navegador (DOM)
- [ ] Fase 3 — JavaScript async
- [ ] Fase 4 — Consolidar con proyectos sin framework
- [ ] Fase 5 — Herramientas y siguientes pasos

## Fase actual
1

## Temas dominados
- Arrays: qué son (lista de valores), crear con `[]`, leer con índice desde 0, `.length` cuenta ELEMENTOS (no el último índice), cambiar elemento (`arr[i] = valor`), `const` no da error al cambiar un elemento (no se reemplaza la lista)
- Recorrer array con `for`: `for (let i = 0; i < arr.length; i++)` + `arr[i]`; mostrar numeración desde 1 con `(i + 1)`
- Patrón acumulador: `let suma = 0` antes del for + `suma += arr[i]` dentro + usar el acumulador después del for (fuera de llaves)
- Acceder a posición inexistente → `undefined`
- `console.log()`: imprimir en consola, comillas como delimitadores (no se imprimen)
- Variables con `let`: crear, asignar (`=`) y leer valores
- Tipos de datos: string (texto), number (número), boolean (verdadero/falso)
- `typeof`: preguntar el tipo de un valor
- Concatenación con `+` (pega textos)
- ReferenceError: mensaje "no está definida" al usar variable inexistente
- Operadores aritméticos: `+`, `-`, `*`, `/`, `%` (módulo/resto), `**` (potencia)
- Módulo `%`: sobrante al repartir en grupos completos (ej: `10 % 3` → `1`); sirve para par/impar (`n % 2 === 0`)
- Precedencia de operadores: `*`/`/`/`%` antes que `+`/`-`; paréntesis mandan
- Atajos: `+=`, `-=`, `*=`, `**=`, `++` (suma 1), `--`
- Comparadores: `<`, `>`, `<=`, `>=`, `===`, `!==` (comparan y dan `true`/`false`)
- Condiciones con `if` / `else if` / `else`: bloques `{}`, el `else` no lleva condición (es el caso contrario)
- Operadores lógicos: `&&` (y: deben cumplirse ambos), `||` (o: con uno basta), `!` (not: invierte)
- `identificacion` ya es booleano: no hace falta `== true`, se usa la variable directa
- Coerción con `+`: convierte a texto (concatena, ej: `5 + "5"` → `"55"`)
- Coerción con `- * / %`: convierten a número (ej: `"10" - 5` → `5`, `"10" * 2` → `20`, `"7" / "2"` → `3.5`)
- Bucle `for`: `for (let i = 1; i <= N; i++)` — inicio, condición sobre el contador, paso
- Bucle `while`: repite mientras la condición sea `true`; la condición se revisa ANTES de cada vuelta (el último valor imprimible es el contador en 1, no 0); si no cambias la condición → bucle infinito
- Rastrear bucles con tablita vuelta/valor (en práctica)

## Temas en progreso
- Punto débil anterior (`for` con condición sobre el contador, `let` sin typo) **superado en examen del 2026-09-23 → nota 10**
- Próxima clase (Clase 6): añadir/quitar elementos de array (`push`, `pop`, `shift`, `unshift`, `indexOf`, `includes`) y luego objetos

## Proyectos construidos
| Proyecto | Enlace local | Repo GitHub |
|----------|-------------|-------------|
_(vacío)_

## Historial de sesiones y exámenes
| Fecha | Tema | Nota (1–10) | Fallos | Puntos a repasar |
|-------|------|-------------|--------|------------------|
| 2026-09-15 | Clase 1: consola, variables `let`, tipos de datos, concatenación, coerción | **9.5** | Describió `=` como "igual a" en vez de "asignar/guardar"; tilde omitida en string ("cafe" vs "café") | Significado de `=` como asignación (repaso breve opcional) |
| 2026-09-17 | Clase 2: operadores y matemáticas (`+ - * / % **`), precedencia, atajos (`+=`, `++`), adelanto de `===` | **10** | Q1: primer ejemplo del `%` inconsistente (dijo "10 casas" para un `15 % 2`) — **el alumno lo corrigió solo** al reenviar ("15 casas") → nota completa; feedback estilo: nombres de variables claros (`fahrenheit` no `celsius`) y una instrucción por línea | Ninguno crítico. Opcional: pulir ejemplo propio del `%` y estilo (una instrucción por línea) |
| 2026-09-21 | Clase 3: comparadores, `if/else if/else`, operadores lógicos (`&&`, `||`, `!`) | **9.5** | P4 (teoría): no supo explicar la diferencia completa `==` vs `===` (solo dijo que `===` compara). Detalles menores sin quitar nota: tildes omitidas en strings ("Precaucion", "inválido"), `<= -0` redundante (equivale a `<= 0`), typo "Prestramo" | `==` vs `===` y coerción (se verá en Clase 4); escribir mensajes con tildes correctas en strings |
| 2026-09-23 | Clase 4: coerción a fondo, `==` vs `===`, bucles `for` y `while` | **10** (evolución de la sesión: 6.9 → 7.8 → 8.75 → **10** en examen final de la sesión) | Sin fallos en el examen final: coerción (definición + ejemplos `5+"5"`→`"55"`), `==` vs `===` (hueco de Clase 3 cerrado), `"6"*3`→18, `"6"+3`→"63", `0==""`→true / `0===""`→false, `for` 1..7 correcto, `while` 3..1 + bucle infinito, `suma+=2`×3→6 y `6=="6"`→true | Ninguno. Todo superado. Próxima: Clase 5 (arrays) |
| 2026-09-24 | Clase 5: arrays (crear, leer por índice, `.length`, cambiar elemento, recorrer con `for`, acumulador) | **9.5** | P3: dijo `frutas.length` = 2 cuando la lista tiene 3 elementos (confundió cantidad de elementos con índice); P5: número correcto (12) pero explicó "suma el número anterior" (aclarar: suma cada elemento del array al acumulador) | `length` cuenta ELEMENTOS (el último índice es `length - 1`); explicar acumulador como "suma cada elemento" |

## Notas
- Repo GitHub: `macaqui/ejercicios` (privado, https://github.com/macaqui/ejercicios). Todo sube aquí cada sesión.

## Preferencias del alumno
- **En ejercicios: NO dar el código.** Solo instrucciones/pistas; el alumno escribe el código él mismo. El código solo se muestra cuando se está explicando/enseñando un concepto. Aplicar en todos los profes (JS, HTML, etc.).
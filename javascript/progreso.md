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
- `console.log()`: imprimir en consola, comillas como delimitadores (no se imprimen)
- Variables con `let`: crear, asignar (`=`) y leer valores
- Tipos de datos: string (texto), number (número), boolean (verdadero/falso)
- `typeof`: preguntar el tipo de un valor
- Concatenación con `+` (pega textos)
- ReferenceError: mensaje "no está definida" al usar variable inexistente
- Coerción básica: `"5" + 5` → `"55"` (número se vuelve texto)
- Operadores aritméticos: `+`, `-`, `*`, `/`, `%` (módulo/resto), `**` (potencia)
- Módulo `%`: sobrante al repartir en grupos completos (ej: `10 % 3` → `1`); sirve para par/impar (`n % 2 === 0`)
- Precedencia de operadores: `*`/`/`/`%` antes que `+`/`-`; paréntesis mandan
- Atajos: `+=`, `-=`, `*=`, `**=`, `++` (suma 1), `--`
- Comparación `===` (adelanto): pregunta "¿es exactamente igual?", responde `true`/`false`
- Comparadores: `<`, `>`, `<=`, `>=`, `===`, `!==` (comparan y dan `true`/`false`)
- Condiciones con `if` / `else if` / `else`: bloques `{}`, el `else` no lleva condición (es el caso contrario)
- Operadores lógicos: `&&` (y: deben cumplirse ambos), `||` (o: con uno basta), `!` (not: invierte)
- `identificacion` ya es booleano: no hace falta `== true`, se usa la variable directa

## Temas en progreso
- Próxima clase (Clase 4): coerción y `==` vs `===` a fondo; bucles `for`/`while`

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

## Notas
- Repo GitHub: `macaqui/ejercicios` (privado, https://github.com/macaqui/ejercicios). Todo sube aquí cada sesión.

## Preferencias del alumno
- **En ejercicios: NO dar el código.** Solo instrucciones/pistas; el alumno escribe el código él mismo. El código solo se muestra cuando se está explicando/enseñando un concepto. Aplicar en todos los profes (JS, HTML, etc.).
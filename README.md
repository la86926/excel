# Excel Studio — Academia de Excel 365

Curso visual e interactivo, compatible con GitHub Pages, para Excel 365 de Windows en español.

## Uso
Abrir https://la86926.github.io/excel/. El progreso se guarda localmente en el navegador y se puede exportar/importar desde Preferencias.

## Arquitectura
- `index.html`: estructura principal y navegación.
- `css/style.css`, `css/player.css`: diseño adaptativo, modo claro y oscuro.
- `js/curriculum.js`: cinco niveles, 40 lecciones y cinco proyectos.
- `js/sequence.js`: acciones temporizadas por lección.
- `js/view.js`: hoja de demostración, tabla dinámica didáctica, gráficos y panel.
- `js/controller.js`: reproducción, pausa, pasos, velocidad, subtítulos y pantalla completa.
- `js/workbook.js`: descarga de archivos .xlsx (datos, guía y resumen de referencia) sin servicios externos.
- `js/storage.js`: progreso local, exportación e importación.
- `js/app.js`: páginas, temario, proyectos, navegación y preferencias.

## Alcance actual
Las 40 lecciones tienen una secuencia visual y pasos para practicar. Las fórmulas se escriben progresivamente; la demostración es una **simulación didáctica**, no una copia exacta de Microsoft Excel.

Las tablas dinámicas y gráficos presentados en el reproductor son representaciones docentes con datos calculados a partir del ejemplo. Los archivos Excel de resultado incluyen un resumen **estático**; no incorporan objetos nativos de tabla dinámica, segmentación o un dashboard Excel editable ya terminado. Estas operaciones se construyen dentro de Excel siguiendo las indicaciones de las lecciones. Los módulos de Power Query y Power Pivot muestran un esquema explicativo, no una réplica de sus editores.

La interfaz y los archivos utilizan datos completamente ficticios. No existen cuestionarios ni calificaciones.

## Pendiente para completar el alcance del prompt maestro
1. Demostraciones más detalladas y variadas, incluyendo acciones de arrastre fieles para cada campo, rellenar y copiar, filtros complejos y gráficos editables.
2. Archivos finales con tablas dinámicas nativas, segmentadores y dashboards totalmente funcionales en Excel.
3. Tutorial audiovisual profundo de Power Query y Power Pivot con capturas o videos verificados.
4. Prueba manual visual en Safari iPhone y navegador Windows con Excel 365.

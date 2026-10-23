# Chacinas Olmedo

Landing estática independiente en HTML5, CSS3 y JavaScript vanilla. Abrir `index.html` con Live Server de VS Code. No requiere instalación, compilación ni servicios externos para mostrar contenido, fuentes y fotografías. Sin configuración de Netlify ni despliegues.

## Dirección visual

Papel #F0E4D0, vino #7B2929, oliva #33382F, marfil #FAF7F0 y ocre #B48A57. Composición asimétrica, fotografía gastronómica lateral, botones con pequeños cortes de papel, hoja de dirección y teléfono tipográfico. Fraunces y Figtree alojadas localmente. No se presenta como logotipo oficial: la identidad tipográfica es una propuesta de diseño.

Se revisaron HTML y estilos disponibles de Panadería El Rescoldo, Miel El Bosque, Tasquita El Callejón, Ferretería Corrales, Café-Pub Andalucía y Restaurante Hotel Puerta del Parque. Se evita su combinación de tipografías, menús desplegables, portadas panorámicas, sellos circulares, tarjetas de producto y botones con flechas. No se han editado esos proyectos.

## Investigación y límites editoriales · 23 de octubre de 2026

- [QDQ: Chacinas Olmedo](https://www.qdq.com/chacinas-olmedo-180759): confirma el nombre y la clasificación «Embutidos». La dirección mezcla Fuente 1 con Polígono Industrial Huerto Blanquillo, parcela 27. No se copia esa combinación ni su indicador automático de apertura.
- [Páginas Amarillas: embutidos y fiambre en El Bosque](https://www.paginasamarillas.es/a/embutidos-y-fiambre/cadiz/el-bosque/): Juan Olmedo Corrales aparece como charcuterías y salchicherías en Calle Fuente, 1 BAJO. La coincidencia de apellido, actividad y dirección es un indicio, pero no demuestra por sí sola que sea la misma identidad comercial o titularidad actual. No se fusionan datos ni se publica ese nombre personal.
- El mismo directorio identifica por separado Chacinas y Embutidos El Bosque S.L., en Polígono Industrial Huerto Blanquillo, 11. No se utiliza contenido de esa empresa.
- [Guía gastronómica histórica](https://www.spanishincadiz.com/img/downloads/GuiaGastronomica_eng.pdf): recoge Chacinas Olmedo en La Fuente, 1, con teléfono 956 716 004. Al ser histórica y discrepar del encargo, no se importan teléfono, horarios, productos ni atributos.
- Una [guía histórica del parque de Grazalema](https://www.firstmotif.com/dd4e6246-fc6a-4d97-a6d6-b5f01a09f7f0_GUIA-PARQUE-GRAZALEMA-ES.pdf) menciona Chacinas Hijos de Juan Olmedo, esa dirección y otro teléfono. No acredita continuidad actual; no se transfieren certificaciones, web o características.

**Datos de referencia aportados por el usuario:** Calle la Fuente, 1, 11670 El Bosque, Cádiz; 956 716 600; `tel:+34956716600`. Son los empleados en toda la landing y en LocalBusiness. El teléfono no queda corroborado de forma independiente con las fuentes consultadas; conviene confirmarlo con el propietario. El enlace de Google Maps consulta la dirección proporcionada: no se han inventado coordenadas ni un identificador de establecimiento.

No se ha localizado un catálogo actual verificable, un canal oficial inequívoco ni fotografías propias con autorización comprobable. No se afirman producción propia, elaboración artesanal, trayectoria, productos concretos, horarios, precios, envíos, reseñas, certificaciones o venta online. La sección visual representa la categoría y lleva avisos visibles y textos alternativos explícitos.

## Fotografías y licencias

Descargadas en JPEG y alojadas en `img/`, sin marcas visibles y sin atribuirlas a Olmedo. No se repiten imágenes en el recorrido.

| Archivo | Autor y fuente | Tratamiento |
| --- | --- | --- |
| `portada.jpg` | tugay aydın, [Pexels 5627443](https://www.pexels.com/photo/delicious-cut-sausages-on-cutting-board-and-plate-5627443/) | Ancho 1800 px, JPEG, recorte CSS |
| `detalle.jpg` | Milan, [Pexels 4639328](https://www.pexels.com/photo/cold-cuts-of-cured-sausage-on-board-4639328/) | Ancho 1000 px, JPEG, recorte CSS |
| `mesa.jpg` | Milan, [Pexels 4639694](https://www.pexels.com/photo/delicious-sausages-with-condiments-on-wooden-table-4639694/) | Ancho 1200 px, JPEG, recorte CSS |
| `charcuteria-presentacion.jpg` | Adonyi Gábor, [Pexels 5491277](https://www.pexels.com/photo/close-up-photo-of-salami-slices-5491277/) | Ancho 1200 px, JPEG; encuadre vertical en presentación |
| `embutidos-textura.jpg` | Julia Filirovska, [Pexels 8250423](https://www.pexels.com/photo/close-up-shot-of-suasages-8250423/) | Ancho 1200 px, JPEG; primer plano horizontal en zona de producto |
| `tabla-charcuteria.jpg` | Nicolas Postiglioni, [Pexels 1927385](https://www.pexels.com/photo/slices-of-meat-1927385/) | Ancho 1600 px, JPEG; composición junto al contacto |

Mejora fotográfica: seis fotografías diferentes distribuidas por las secciones existentes, sin añadir una galería o catálogo. Cada una dispone de una variante `-640.jpg` de 640 px, seleccionada mediante `srcset` y `sizes`. La portada conserva prioridad alta y carga inmediata; las otras cinco imágenes usan carga diferida. Todas tienen dimensiones HTML y textos alternativos. Las tres fotografías añadidas usan decodificación asíncrona. Se mantienen identidad, fuentes, navegación, botones, textos, animaciones y footer. Solo se ajustan las composiciones y encuadres necesarios para integrar las fotografías.

Las tres nuevas imágenes se comprobaron visualmente antes de incorporarlas: fotografía real, sin marcas ajenas visibles ni elementos generados. Licencia Pexels comprobada en la misma revisión. La nueva búsqueda no permitió localizar fotografías propias con autorización verificable, por lo que todas las imágenes continúan identificadas como ilustrativas.

[Licencia Pexels](https://www.pexels.com/license/): uso gratuito y modificación, incluido uso comercial, sujeto a sus condiciones; no implica recomendación ni relación con las personas fotografiadas o autores. No son fotos del local ni del surtido.

Tipografías de [Google Fonts: Fraunces](https://github.com/google/fonts/tree/main/ofl/fraunces) y [Figtree](https://github.com/google/fonts/tree/main/ofl/figtree), bajo SIL Open Font License 1.1. Textos de licencia incluidos en `css/OFL-fraunces.txt` y `css/OFL-figtree.txt`. Favicon original SVG creado para esta propuesta.

## Funcionalidad y accesibilidad

Navegación por anclas siempre visible, acceso rápido móvil al teléfono y ubicación, llamadas `tel:`, Google Maps por dirección, copia del número mediante Clipboard API y alternativa local con mensaje de error honesto. Salto al contenido, foco visible, HTML semántico, textos alternativos, imágenes con dimensiones, carga diferida fuera de portada, superficies con revelado por recorte que respeta movimiento reducido. El contenido permanece accesible si JavaScript está deshabilitado. No hay formularios ni botones de compra ficticios.

SEO: título, descripción, Open Graph, datos estructurados LocalBusiness con nombre, actividad, dirección y teléfono. No se inventa dominio, URL canónica o `og:url`; `og:image` es relativa y deberá convertirse a la URL pública real si en el futuro se dispone de ella para asegurar la vista previa social en todas las plataformas.

## Información que solicitar al propietario

Confirmación del teléfono, dirección y continuidad comercial; relación, si existe, con Juan Olmedo Corrales; identidad gráfica oficial; fotografías autorizadas del local y productos; surtido y especialidades actuales; elaboración y procedencia documentadas; horarios; datos de titularidad y textos legales. Añadir características comerciales solo cuando se acrediten.

## Verificación

La carpeta `.qa/` conserva pruebas locales y capturas, y está excluida mediante `.gitignore`. Consultar `results.json` para los resultados reales. Se comprueba sintaxis JavaScript con `node --check js/script.js`. No se han realizado despliegues ni pruebas de llamadas reales. El enlace de Maps se verifica por su dirección de destino, sin afirmar precisión de una ficha cartográfica o ruta física.

Auditoría ejecutada en Chrome sin ventana: 375, 768, 1440 y 1920 px; sin desbordamiento horizontal, imágenes rotas, anclas inexistentes ni errores JavaScript. Fuentes locales cargadas. Capturas completas guardadas por ancho y revisadas visualmente en móvil y escritorio. Comprobados todos los enlaces telefónicos y las tres consultas de Maps. Copia del teléfono comprobada leyendo el portapapeles y probada también la alternativa sin Clipboard API. Navegación con Tab y foco visible comprobados; movimiento reducido comprobado. El servidor temporal y el navegador de prueba se cierran al terminar.


## Compatibilidad de imágenes

### Corrección de visibilidad del revelado

El fallo de fotografías invisibles se reprodujo mediante scroll real en Chrome en los cuatro anchos: las seis superficies seguían en `pending`. El observer observaba el mismo elemento que CSS recortaba por completo con `clip-path: inset(0 0 100% 0)`. El recorte impedía obtener la intersección necesaria para quitar `pending` y también bloqueaba la carga diferida de las fotografías. No había errores JavaScript ni archivos JPEG dañados. La conversión previa de formato no resolvía este problema de presentación.

Se modificaron únicamente CSS y JavaScript de la web: las superficies, incluidas clases antiguas `pending`/`visible`, tienen visibilidad normal. Se observa su geometría sin ocultarla; al entrar se reproduce una animación finita de 650 ms mediante Web Animations API, sin estilos persistentes (`fill: none`). Si falla el observer o la animación, se mantiene el contenido visible. Con movimiento reducido o sin JavaScript no se oculta ninguna fotografía; cambiar a movimiento reducido cancela las animaciones activas. No se cambiaron HTML, fotos, identidad o composición.

Pruebas ejecutadas: scroll por toda la página a 375, 768, 1440 y 1920 px sin quitar clases desde las pruebas; todas las fotos cargadas, visibles y cero elementos `pending`. En móvil y escritorio también se probaron JavaScript deshabilitado, movimiento reducido, constructor de observer con error, observer sin callbacks y animación con error: todos mantienen visibles las seis fotografías. Consola sin errores. Ver `.qa/reveal-before.json`, `.qa/reveal-results.json` y `.qa/reveal-fallbacks.json`. Capturas reales después del scroll en `.qa/reveal-full-375.png` y `.qa/reveal-full-1440.png`. Se retiró de la prueba general el paso que eliminaba artificialmente `pending` y ocultaba el defecto. Los doce JPEG se validaron de nuevo con firma binaria, decodificación nativa Windows y dimensiones positivas; la prueba general verifica además HTTP, favicon y cada referencia local.

Las fotografías se convirtieron realmente desde WebP válido a JPEG para facilitar su apertura en visores. Se conservaron las mismas seis fotos y doce variantes; fuentes y licencias no cambian. Consulta AUDITORIA-IMAGENES.md para el diagnóstico, el inventario por archivo y las pruebas ejecutadas. Las dimensiones HTML de mesa conservan el encuadre existente fijado por CSS; el archivo fuente es vertical (1200 × 1798).

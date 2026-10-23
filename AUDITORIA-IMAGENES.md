# Auditoría y compatibilidad de imágenes

Se revisaron individualmente los doce archivos originales. Todos tenían firma RIFF/WEBP correcta, longitud RIFF exacta, bloques completos, dimensiones positivas y decodificación válida con Image.decode() y createImageBitmap(). Todos respondían HTTP 200 y se abrían mediante file:// en Chrome. No se encontraron archivos vacíos, HTML, JSON, respuestas de error, extensiones incorrectas ni descargas truncadas.

No se pudo reproducir el fallo de apertura de los visores del usuario. La incompatibilidad del visor o de la asociación de archivos WebP es una hipótesis, no una causa demostrada. Para ampliar la compatibilidad se convirtió realmente cada fotografía a JPEG mediante decodificación y recodificación con canvas, calidad 0,95, conservando dimensiones y píxeles de origen. No se descargaron ni sustituyeron fotografías por otras. La recodificación JPEG es con pérdida y aumenta el tamaño respecto a WebP.

| Original auditado | Resultado original | Archivo actual | Dimensiones | Bytes actuales |
| --- | --- | --- | --- | --- |
| charcuteria-presentacion-640.webp | WebP válido, decodifica | charcuteria-presentacion-640.jpg | 640 × 427 | 121606 |
| charcuteria-presentacion.webp | WebP válido, decodifica | charcuteria-presentacion.jpg | 1200 × 800 | 375871 |
| detalle-640.webp | WebP válido, decodifica | detalle-640.jpg | 640 × 427 | 78338 |
| detalle.webp | WebP válido, decodifica | detalle.jpg | 1000 × 668 | 157080 |
| embutidos-textura-640.webp | WebP válido, decodifica | embutidos-textura-640.jpg | 640 × 427 | 108486 |
| embutidos-textura.webp | WebP válido, decodifica | embutidos-textura.jpg | 1200 × 800 | 287704 |
| mesa-640.webp | WebP válido, decodifica | mesa-640.jpg | 640 × 959 | 179880 |
| mesa.webp | WebP válido, decodifica | mesa.jpg | 1200 × 1798 | 516402 |
| portada-640.webp | WebP válido, decodifica | portada-640.jpg | 640 × 360 | 47087 |
| portada.webp | WebP válido, decodifica | portada.jpg | 1800 × 1013 | 260009 |
| tabla-charcuteria-640.webp | WebP válido, decodifica | tabla-charcuteria-640.jpg | 640 × 424 | 63937 |
| tabla-charcuteria.webp | WebP válido, decodifica | tabla-charcuteria.jpg | 1600 × 1060 | 313472 |

Las doce conversiones se validaron mediante firma JPEG de inicio y fin, Image.decode(), createImageBitmap() y el decodificador nativo Windows System.Drawing, que identifica todos los archivos como JPEG. Los originales se conservan únicamente en .qa/original-webp/ (excluido del proyecto publicable).

Se actualizaron src, srcset y Open Graph en index.html. El CSS y JavaScript de la web no se modificaron; CSS solo referencia las dos fuentes locales y JavaScript no carga imágenes. Se mantienen diseños, textos, botones y composiciones. El favicon SVG se decodificó correctamente y responde HTTP 200.

Pruebas finales de Chrome: 375, 768, 1440 y 1920 px, seis fotografías diferentes, doce variantes locales, ningún archivo roto, ninguna referencia con HTTP 404 ni errores JavaScript. Se comprobaron todas las referencias locales HTML y CSS y la apertura directa de portada.jpg. El portapapeles, teléfono, anclas y movimiento reducido continúan funcionando. Evidencias: .qa/image-audit.json, .qa/windows-image-decode.json, .qa/results.json y capturas full-*.png. Los errores CORS de fuentes recogidos en image-audit.json corresponden únicamente a abrir index.html mediante file:// durante la prueba original; no afectan a las imágenes y no aparecen con Live Server/HTTP.

Ninguna imagen queda sin verificar. No se probaron todas las aplicaciones de terceros instaladas por el usuario; sí el decodificador nativo de Windows y Chrome. Sin cambios en otros proyectos ni despliegues.

import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import sharp from 'sharp';


// TODO product
imagemin(["src/img/products/camisetas-basicas/*"], {
    destination: "public/img/products/camisetas-basicas",
    plugins: [
        imageminWebp({
            quality: 50, // Establece el factor de calidad entre 0 y 100.
            quality: 70, // Reduzco la calidad a 70 para mantener un buen equilibrio entre calidad y tamaño de archivo.
            method: 6, // Utilizo el método de compresión más lento para obtener una mejor compresión.
            sns: 80, // Aumento la amplitud de spatial noise shaping para mejorar la calidad visual.
            filter: 60, // Aumento la fuerza del filtro de bloqueo para mejorar la calidad visual.
            crop: { 
               x: 0, 
               y: 100, 
               width: 720, 
               height: 1080 
           }
          //   resize: { width: 800 }, // Cambio el ancho de la imagen a 800 píxeles. El alto se ajustará automáticamente para mantener la proporción.
            //preset: 'default', // Opciones: default, photo, picture, drawing, icon, text.
            //alphaQuality: 100, // Establece la calidad de compresión de transparencia entre 0 y 100.
            //method: 4, // Especifica el método de compresión entre 0 (más rápido) y 6 (más lento).
            //size: 0, // Establece el tamaño objetivo en bytes.
            //sns: 50, // Establece la amplitud del modelado de ruido espacial entre 0 y 100.
            //filter: 0, // Establece la fuerza del filtro de bloqueo entre 0 (apagado) y 100.
            //autoFilter: false, // Ajusta automáticamente la fuerza del filtro.
            //sharpness: 0, // Establece la nitidez del filtro entre 0 (más nítido) y 7 (menos nítido).
            //lossless: false, // Codifica las imágenes sin pérdida. También puede ser un número entre 0 (rápido, archivos más grandes) y 9 (lento, archivos más pequeños).
            //nearLossless: 100, // Codifica sin pérdida con un paso de preprocesamiento adicional, con un factor de calidad entre 0 (máximo preprocesamiento) y 100 (igual que sin pérdida).
            //crop: { x: 0, y: 0, width: 100, height: 100 }, // Recorta la imagen.
            //resize: { width: 800, height: 600 }, // Cambia el tamaño de la imagen. Ocurre después del recorte.
            //metadata: 'none', // Lista de metadatos a copiar del input al output si están presentes. Opciones: all, none, exif, icc, xmp.
        })
    ],
}).then(() => {
    console.log("¡Listo!");
});



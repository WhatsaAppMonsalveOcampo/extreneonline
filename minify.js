// import imagemin from 'imagemin';
// import imageminWebp from 'imagemin-webp';

// imagemin(["src/img/*"], {
//     destination: "public/img",
//     plugins: [imageminWebp({ quality: 50 })],
//   }).then(() => {
//        console.log("Done!");
//   });

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';


const srcFolder = './src/img';
const publicFolder = './public/img';

// Recorre de manera recursiva el directorio de origen
function processDirectory(srcPath, publicPath) {
  fs.readdirSync(srcPath).forEach(item => {
    const srcItemPath = path.join(srcPath, item);
    const publicItemPath = path.join(publicPath, item);
    if (fs.lstatSync(srcItemPath).isDirectory()) {
      // Si es un directorio, procesa su contenido de manera recursiva
      processDirectory(srcItemPath, publicItemPath);
    } else {
      // Si es un archivo, verifica si es una imagen y si no está en formato WebP
      if (item.match(/\.(jpg|jpeg|png)$/i) && !item.endsWith('.webp')) {
        const outputPath = path.join(publicPath, path.dirname(srcItemPath.substring(2)), path.basename(srcItemPath, path.extname(srcItemPath)) + '.webp');

        // Verifica si la carpeta en public existe, si no, la crea
        const outputFolder = path.dirname(outputPath);
        if (!fs.existsSync(outputFolder)) {
          fs.mkdirSync(outputFolder, { recursive: true });
        }

        // Convierte y guarda la imagen como WebP
        sharp(srcItemPath)
          .webp({ quality: 75 })
          .toFile(outputPath)
          .then(() => console.log(`Se ha optimizado y guardado ${outputPath}`))
          .catch(err => console.error(err));
      }
    }
  });
}

// Inicia el proceso de procesamiento
processDirectory(srcFolder, publicFolder);

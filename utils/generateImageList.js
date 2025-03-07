// utils/generateImageList.js
import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

async function generateImageList() {
    // Get the directory of this script (utils/), then go up one level to the project root
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const dirPath = join(__dirname, '../public/images/portfolio/resized');
    
    try {
        const files = await fs.readdir(dirPath);
        const imageFiles = files.filter(file => /\.(png|jpe?g|svg|gif)$/i.test(file));
        const imgObjs = imageFiles.map(name => {return {src: `/images/portfolio/resized/${name}`, alt: ''} })
        console.log(imgObjs)
        // console.log('Image list:');
        // console.log(JSON.stringify(imageFiles, null, 2));
    } catch (error) {
        console.error('Error generating image list:', error);
    }
}

generateImageList();
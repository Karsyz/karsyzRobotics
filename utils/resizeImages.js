// utils/resizeImages.js
import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

async function resizeImages() {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const dirPath = join(__dirname, '../public/images/portfolio');
    const outputDir = join(__dirname, '../public/images/portfolio/resized');
    
    await fs.mkdir(outputDir, { recursive: true }); // Create output folder
    
    try {
        const files = await fs.readdir(dirPath);
        const imageFiles = files.filter(file => /\.(png|jpe?g|svg|gif)$/i.test(file));
        
        console.log(`Found ${imageFiles.length} images to resize:`);
        console.log(imageFiles);
        
        for (const file of imageFiles) {
            const inputPath = join(dirPath, file);
            const outputPath = join(outputDir, file); // Same name in new folder
            
            await sharp(inputPath)
                .resize({ height: 600, withoutEnlargement: true })
                .toFile(outputPath);
            
            console.log(`Resized: ${file}`);
        }
        
        console.log('All images resized successfully!');
    } catch (error) {
        console.error('Error resizing images:', error);
    }
}

resizeImages();
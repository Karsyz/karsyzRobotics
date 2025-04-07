// utils/resizeImages.js
import { promises as fs } from 'fs';
import { join, dirname, relative, sep } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

// Define __dirname for ES Modules
const __dirname = dirname(fileURLToPath(import.meta.url));

async function getImageFiles(dir, ignoreFolders = []) {
    let imageFiles = [];
    const files = await fs.readdir(dir, { withFileTypes: true });

    for (const file of files) {
        const fullPath = join(dir, file.name);
        if (file.isDirectory()) {
            // Skip 'resized' folders and any in ignoreFolders
            if (file.name === 'resized' || ignoreFolders.includes(file.name)) {
                console.log(`Skipping folder: ${fullPath}`);
                continue;
            }
            const subDirFiles = await getImageFiles(fullPath, ignoreFolders);
            imageFiles = imageFiles.concat(subDirFiles);
        } else if (/\.(png|jpe?g|svg|gif)$/i.test(file.name)) {
            const relPath = relative(dir, fullPath);
            if (dir === join(__dirname, '../public/images') && !relPath.includes(sep)) {
                console.log(`Skipping root-level image: ${fullPath}`);
            } else {
                imageFiles.push(fullPath);
            }
        }
    }
    return imageFiles;
}

async function resizeImages() {
    const baseDir = join(__dirname, '../public/images');
    const ignoreFolders = ['portfolio']; // Example ignore list

    try {
        const imageFiles = await getImageFiles(baseDir, ignoreFolders);
        console.log(`Found ${imageFiles.length} images to process:`);
        console.log(imageFiles.map(file => relative(baseDir, file)).join('\n'));

        if (imageFiles.length === 0) {
            console.log('No images found to process. Check directory structure and ignore settings.');
            return;
        }

        for (const inputPath of imageFiles) {
            const relativePath = relative(baseDir, inputPath);
            const pathParts = relativePath.split(sep);
            const fileName = pathParts.pop();
            const categoryDir = pathParts.join(sep);

            const outputDir = join(baseDir, categoryDir, 'resized');
            const outputPath = join(outputDir, fileName);

            // Check if the output file already exists
            let skip = false;
            try {
                await fs.access(outputPath);
                console.log(`Skipping existing resized image: ${relative(baseDir, outputPath)}`);
                skip = true;
            } catch {
                console.log(`Output file does not exist, will resize: ${relative(baseDir, outputPath)}`);
            }

            if (skip) continue;

            await fs.mkdir(outputDir, { recursive: true });

            const sharpInstance = sharp(inputPath)
                .resize({
                    width: 600,
                    height: 600,
                    fit: 'cover',
                    position: 'center',
                    withoutEnlargement: true
                });

            if (fileName.match(/\.jpe?g$/i)) {
                sharpInstance.jpeg({ quality: 80 });
            } else if (fileName.match(/\.png$/i)) {
                sharpInstance.png({ compressionLevel: 9 });
            } else if (fileName.match(/\.gif$/i)) {
                sharpInstance.gif({ colours: 128 });
            }

            await sharpInstance.toFile(outputPath);
            
            console.log(`Resized and compressed: ${relativePath} -> ${relative(baseDir, outputPath)}`);
        }

        console.log('All images processed successfully!');
    } catch (error) {
        console.error('Error resizing images:', error);
    }
}

resizeImages();
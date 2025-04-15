// rename-pngs.mjs
import { promises as fs } from 'fs';
import { join, resolve } from 'path';

// Directory to start the search (adjust to your images folder)
const rootDir = resolve('../public/images'); // e.g., 'public/images/models/resized'

const renamePngFiles = async (dir) => {
  try {
    const files = await fs.readdir(dir, { withFileTypes: true });

    for (const file of files) {
      const fullPath = join(dir, file.name);

      if (file.isDirectory()) {
        // Recurse into subdirectories
        await renamePngFiles(fullPath);
      } else if (file.isFile() && file.name.toUpperCase().endsWith('.PNG')) {
        // Check for .PNG (case-insensitive by converting to uppercase)
        const newName = file.name.slice(0, -4) + '.png'; // Remove .PNG, add .png
        const newPath = join(dir, newName);

        console.log(`Renaming: ${fullPath} -> ${newPath}`);

        try {
          await fs.rename(fullPath, newPath);
          console.log(`Successfully renamed: ${newName}`);
        } catch (err) {
          console.error(`Error renaming ${fullPath}: ${err.message}`);
        }
      }
    }
  } catch (err) {
    console.error(`Error reading directory ${dir}: ${err.message}`);
  }
};

const main = async () => {
  console.log(`Starting to rename *.PNG files in ${rootDir}...`);
  await renamePngFiles(rootDir);
  console.log('Finished renaming files.');
};

main().catch((err) => {
  console.error(`Script failed: ${err.message}`);
  process.exit(1);
});
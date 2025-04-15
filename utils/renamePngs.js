const fs = require('fs').promises;
const path = require('path');

async function replacePNGinText(directory) {
  try {
    const files = await fs.readdir(directory);

    for (const file of files) {
      const filePath = path.join(directory, file);

      // Check if it's a file (not a directory)
      const stats = await fs.stat(filePath);
      if (stats.isFile()) {
        // Read file content
        let content = await fs.readFile(filePath, 'utf8');

        // Replace .PNG with .png
        if (content.includes('.PNG')) {
          const newContent = content.replace(/\.PNG/g, '.png');

          // Write updated content back to file
          await fs.writeFile(filePath, newContent, 'utf8');
          console.log(`Updated: ${file}`);
        }
      }
    }
    console.log('Text replacement complete.');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Usage: Pass the directory path as a command-line argument
const targetDir = process.argv[2] || './';
replacePNGinText(targetDir);
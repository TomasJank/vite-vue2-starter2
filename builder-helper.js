const fs = require('fs');
const fse = require('fs-extra');

const outputDir = 'dist';

// Removing and recreating old dist folders
fs.rmdirSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(outputDir);

// Copying global scss files to dist folder to be able to use it in different micro front-end projects
// const scssFolders = ['scss', 'scss/base', 'scss/abstracts', 'scss/utils'];

// scssFolders.forEach((folder) => {
//   fs.mkdirSync(`${outputDir}/${folder}`);
// });

// const scssFoldersToCopy = ['base', 'abstracts','utils'];

// scssFoldersToCopy.forEach((folder) => {
//   fse.copy(`src/css/${folder}`, `${outputDir}/css/${folder}`, (err) => {
//     if (err) throw err;
//   });
// });

const globalScss = ['main'];

globalScss.forEach((scss) => {
  fs.copyFileSync(`src/css/${scss}.css`, `${outputDir}/css/${scss}.css`);
});


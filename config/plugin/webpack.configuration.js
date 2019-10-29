//------------------------------------------------------------------------------------------------------------
// File: webpack.externals.js
//
// Desc: Include nel rilascio i file contenenti le traduzioni
// Path: /src/config/plugin/webpack.translations
//------------------------------------------------------------------------------------------------------------


const fs = require('fs');
const path = require('path');


const { COMPILE_ENV } = process.env;

const target = COMPILE_ENV === 'PRODUCTION' ? './dist' : './build';


class ClientConfiguration {
  constructor() {
    this.outputPath = path.resolve(__dirname, '../../release', target);

    this.publicPath = path.resolve(__dirname, '../../public');
  }

  apply(compiler) {
    compiler.plugin("done", () => {
      // is file
      const pathFile = path.resolve(this.publicPath, './config.json');
      const test = fs.lstatSync(pathFile).isFile();
      if (test) {
        // copy file
        const pathCopy = path.resolve(this.outputPath, './config.json');
        fs.copyFile(pathFile, pathCopy, (err) => {
          console.log('\n');
          console.info('> input', pathFile, '--> output', pathCopy);

          if (err) {
            console.log('File copied with errors');
            console.error(err);
          } else {
            console.log('File copied successfully');
          }

          console.log('\n');
        });
      }
    });
  }
}


module.exports = {
  ClientConfiguration,
};

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


class ClientTranslations {
  constructor() {
    this.outputPath = path.resolve(__dirname, '../../release', target, './translations');

    this.publicPath = path.resolve(__dirname, '../../public/translations');
  }

  apply(compiler) {
    compiler.plugin("done", () => {
      fs.readdir(this.publicPath, (err, dirs) => {
        dirs.forEach(dir => {
          // create main directory if not exist
          if (!fs.existsSync(this.outputPath)){
            fs.mkdirSync(this.outputPath);
          }

          // is directory
          const pathDir = path.resolve(this.publicPath, dir);
          const test = fs.lstatSync(pathDir).isDirectory();
          if (test) {
            fs.readdir(pathDir, (err, files) => {
              files.forEach(file => {

                // create sub-directory if not exist
                const pathOutput = path.resolve(this.outputPath, dir);
                if (!fs.existsSync(pathOutput)){
                  fs.mkdirSync(pathOutput);
                }

                // is file
                const pathFile = path.resolve(pathDir, file);
                const test = fs.lstatSync(pathFile).isFile();
                if (test) {
                  // copy file
                  const pathCopy = path.resolve(pathOutput, file);
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
            });
          }
        });
      });
    });
  }
}


module.exports = {
  ClientTranslations,
};

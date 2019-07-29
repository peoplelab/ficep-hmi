const fs = require('fs');
const path = require('path');


const { COMPILE_ENV, NODE_ENV } = process.env;

let outputPath;
if (NODE_ENV === 'DEVELOPMENT') {
  outputPath = './temp';
} else if (COMPILE_ENV === 'PRODUCTION') {
  outputPath = './dist';
}else {
  outputPath = './build';
}

const target = {
  app: './app',
  mocks: './mocks',
};


class ServerConfig {
  static get target () {
    return target;
  }

  constructor(target, config) {
    this.path = path.resolve(__dirname, '../..', outputPath, target, './server.config.json');

    this.data = JSON.stringify(config);
  }

  apply(compiler) {
    compiler.plugin("done", () => {
      fs.writeFile(this.path, this.data, (err) => {
        console.log('\n');
        console.info('> ', this.path);

        if (!err) {
          console.info('Server config written successfully');
        } else {
          console.info('Server configuration written with errors');
          console.error(err);
        }
        console.log('\n');
      });
    });
  }
}


module.exports = {
  ServerConfig,
}

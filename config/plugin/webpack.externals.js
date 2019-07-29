const fs = require('fs');
const path = require('path');


const { COMPILE_ENV } = process.env;

const target = {
  app: COMPILE_ENV === 'PRODUCTION' ? './dist' : './build',
  mocks: './mocks',
};


class ServerConfig {
  static get target () {
    return target;
  }

  constructor(target, config) {
    this.path = path.resolve(__dirname, '../../release', target, './server.config.json');

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
};

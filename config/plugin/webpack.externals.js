const fs = require('fs');
const path = require('path');


const config = {
  "PORT": 3500,
  "LOG_LEVEL": "debug"
};


class ServerConfig {
  constructor() {
    this.path = path.resolve(__dirname, '../../build/app/server.config.json');

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

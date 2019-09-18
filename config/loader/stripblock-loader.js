//------------------------------------------------------------------------------------------------------------
// File: stripblock-loader.js
//
// Desc: Funzione loader di webpack per la rimozione di blocchi di codice in base al rilascio
// Es: /* #start:dev */ {codice da rimuove in produzione} /* #end:dev */
//
// Path: /src/config/loader/stripblock-loader
//------------------------------------------------------------------------------------------------------------


const { getOptions } = require('loader-utils');
const validateOptions = require('schema-utils');


const schema = {
  type: 'object',
  properties: {
    env: {
      description: "Define the compilation environment type",
      type: 'string'
    }
  },
  additionalProperties: false
};

module.exports = function stripblockLoader(source, map, meta) {
  const options = getOptions(this);
  validateOptions(schema, options, 'stripblock');

  const { env } = options;
  const callback = this.async();

  const pStart = new RegExp(`/\\* *#start:${env} *\\*/`, 'i');
  const pStartX = new RegExp(`{/\\* *#start:${env} *\\*/}`, 'i');
  const pEnd = new RegExp(`[^]*/\\* *#end:${env} *\\*/`, 'i');
  const pEndX = new RegExp(`[^]*{/\\* *#end:${env} *\\*/}`, 'i');

  let list = source.split(pStart);
  let newSource = list.reduce((acc, item = '') => acc + item.replace(pEnd, ''), '');

  list = newSource.split(pStartX);
  newSource = list.reduce((acc, item = '') => acc + item.replace(pEndX, ''), '');

  callback(null, newSource, map, meta);
}
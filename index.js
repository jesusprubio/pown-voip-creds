/*
  Copyright Jesús Pérez <jesusprubio@fsf.org>

  This code may only be used under the MIT license found at
  https://opensource.org/licenses/MIT.
*/

'use strict';

const logger = require('pown-logger');

const creds = require('./cfg.json');
let pkgName = require('./package').name;


pkgName = pkgName.slice(5);


exports.yargs = {
  command: pkgName,
  describe: 'Show some common VoIP system default credentials',

  builder: {},

  handler: () => {
    // TODO: Maybe it should be better to print this in the client.
    logger.title(pkgName);
    logger.result(null, creds);
  },
};

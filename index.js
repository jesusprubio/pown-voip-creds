/*
  Copyright Jesús Pérez <jesusprubio@fsf.org>

  This code may only be used under the MIT license found at
  https://opensource.org/licenses/MIT.
*/

'use strict';

let pkgName = require('./package').name;


pkgName = pkgName.slice(5);


exports.yargs = {
  command: 'voip-creds',
  describe: 'Show some common VoIP system default credentials.',

  builder: {},

  handler: () => {
    const logger = require('pown-logger');
    const creds = require('./cfg.json');

    // TODO: Maybe it should be better to print this in the client.
    logger.title(pkgName);
    logger.result(creds);
  },
};

/*
  Copyright Jesús Pérez <jesusprubio@fsf.org>

  This code may only be used under the MIT license found at
  https://opensource.org/licenses/MIT.
*/

'use strict';


exports.yargs = {
  command: 'voip-creds',
  describe: 'Show some common VoIP system default credentials',

  builder: {},

  handler: () => {
    /* eslint-disable global-require */
    const logger = require('pown-logger');
    const creds = require('./cfg.json');
    /* eslint-enable global-require */

    logger.title(this.yargs.command);
    logger.result(null, creds);
  },
};

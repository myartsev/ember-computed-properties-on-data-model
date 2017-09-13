/* eslint-env node */
'use strict';

// To use it create some files under `mocks/`
// e.g. `server/mocks/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };

module.exports = function(app) {
  const globSync   = require('glob').sync;
  const mocks      = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);
  const proxies    = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);

  // Log proxy requests
  const morgan = require('morgan');
  app.use(morgan('dev'));

  app.get('/foos/1', function(req, res) {
    res.json({
      data: {
        type: 'foo',
        id: 1,
        attributes: {
          bar: Math.floor(Math.random() * 100) + 1
        }
      }
    });
  })

  mocks.forEach(route => route(app));
  proxies.forEach(route => route(app));
};

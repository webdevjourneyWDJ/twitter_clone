const express = require('express');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const app = express();

const auth = require('./lib/auth');
const routes = require('./routes');

module.exports = (config) => {
  const log = config.log();
  // Add a request logging middleware in development mode
  if (app.get('env') === 'development') {
    app.use((req, res, next) => {
      log.debug(`${req.method}: ${req.url}`);
      return next();
    });
  }

  app.use(session({
    secret: "this is a secret",
    name: "sessionId",
    resave: false,
    saveUninitialized: false,
    store: new RedisStore({
      client: config.database.redis.client
    })
  }));

  app.use(auth.initialize);
  app.use(auth.session);

  app.use('/', routes());

  // eslint-disable-next-line no-unused-vars
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    // Log out the error to the console
    log.error(error);
    return res.json({
      error: {
        message: error.message,
      },
    });
  });
  return app;
};

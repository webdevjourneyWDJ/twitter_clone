const express = require('express');
const cors = require('cors');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const app = express();

const auth = require('./lib/auth');
const routes = require('./routes');

const TweetService = require('./services/TweetService');
const UserService = require('./services/UserService');
const CommentService = require('./services/CommentService');

module.exports = (config) => {
  const log = config.log();

  const tweetService = new TweetService();
  const userService = new UserService();
  const commentService = new CommentService();

  app.use(cors({credentials: true, origin:"http://localhost:3000"}));
  app.use(express.urlencoded({extended: true}));
  app.use(express.json());
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

  app.use('/', routes({tweetService, userService, commentService, config}));

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

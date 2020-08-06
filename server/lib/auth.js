require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {User} = require('../models/UserModel');

const config = require('../config')[process.env.NODE_ENV || 'development'];
const log = config.log();

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {

    const data = {
      name: profile.displayName,
      email: profile.emails[0].value
    }

    User.findOne({email: data.email}).then(existingUser => {
      if(existingUser){
        log.info('Existing Google User');
        return done(null, existingUser);
      }

      const user = new User(data);
      user.save().then((user) => {
        log.info('Saved New Google User');
        return done(null, user);
      }).catch(err => log.fatal(err));
    }).catch(err => log.fatal(err));
  }
));


passport.serializeUser((user, done) => done(null, user._id));

passport.deserializeUser(async (id, done) => {
  try{
    const user = await User.findById(id).exec();
    return done(null, user);
  }catch(err){
    return done(err);
  }
});

module.exports = {
  initialize: passport.initialize(),
  session: passport.session()
}















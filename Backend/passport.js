const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
//Google Authorize

const GOOGLE_CLIENT_ID =
  "60603224319-fdk90ogjoeaquh79anhdo38h31nvv9g0.apps.googleusercontent.com";

const GOOGLE_CLIENT_SECRET = "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";
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },

    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

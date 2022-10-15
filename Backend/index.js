//import libraries
// const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
require("./passport");
const authRoute = require("./route/auth");
require("dotenv").config();
const app = express();
const session = require("express-session");

app.use(
  session({
    secret: "somethingsecretgoeshere",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
//cookie-session currecntly has issues

//allows for relogin on reconnect
// app.use(
//   cookieSession({
//     name: "session",
//     keys: ["greg"],
//     maxAge: 24 * 60 * 60 * 100,
//   })
// );
//authentication
app.use(passport.initialize());
app.use(passport.session());
//data transfer
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,DELETE,PUT",
    Credential: true,
  })
);

app.use("/auth", authRoute);

app.listen("5000", () => {});

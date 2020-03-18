//login
const app = require("express")();
const parser = require("body-parser");
const session = require("express-session");
const port = process.env.PORT || 3000;
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const flash = require("connect-flash");
const passport = require("passport");

//bitly
const methodOverride = require("method-override");
const cookieSession = require("cookie-session");
const moment = require("moment");
const randomizle = require("./helper/randomizle");

// configuration
//connect to database
require("./config/passport")(passport); // pass passport for configuration

// configure bitly
app.use(methodOverride("_method"));
app.use(flash());
app.use(
  cookieSession({
    name: "session",
    keys: ["key 1"]
  })
);

// Object to store all user-submitted URLs
const urlDatabase = {};

// Object to store the registered users (in lieu of database)
const users = {};

// set up our express application
//app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.set("view engine", "ejs");
// app.use(app.static(__dirname + "/public"));

// required for passport
app.use(
  session({
    secret: "TestingRunning",
    resave: true,
    saveUnininitialized: true
  })
); //session secret

//Passport
app.use(passport.initialize());
app.use(passport.session()); //persistent login sesion
app.use(flash()); // use connect-flash for flash message stored  in session

app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// routes
require("./routes/index")(app, passport); // load our routes and pass in our app and fully configured passport
require("./routes/dashboard.js")(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log("Server is Running :" + port);

require("dotenv").config({ path: ".env" });

//login
const express = require("express")();
const parser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const port = process.env.PORT || 3000;

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const shortUrlRouter = require("./routes/shortUrl");

const app = express();

app.listen(port, () => console.log(`Server is running in port ${port}`));

// set up our express application
app.use(morgan("dev")); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/short_url", shortUrlRouter);

module.exports = app;

const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

// Always require and mount near the top
require("dotenv").config();

// Connect to the database
require("./config/database");

const quotesRouter = require("./routes/api/quotes");
const notesRouter = require("./routes/api/notes")

const app = express();

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.json());
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "build")));

// middleware to verify the token and assign user object of payload to req.user
// be sure to mount before the routes
app.use(require("./config/checkToken"));

// Put API routes here, before the "catch all" route
app.use("/api/users", require("./routes/api/users"));
app.use("/api/quotes", quotesRouter);
app.use("/api/quotes/details", notesRouter)

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});

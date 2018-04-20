const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var logger = require('morgan');
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

// Configure body parser for AJAX requests and morgan for debugging
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
// app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
const db = mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

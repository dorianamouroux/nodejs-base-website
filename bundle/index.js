// from npm.js
module.exports.express = require("express");
module.exports.swig = require("swig");
module.exports.path = require("path");
module.exports.logger = require("morgan");
module.exports.bodyParser = require("body-parser");
module.exports.session = require("express-session");
module.exports.cookieParser = require('cookie-parser');
module.exports.favicon = require('serve-favicon');

// my own stuff
module.exports.launch = require("../launch");
module.exports.router = require("../router");
module.exports.error = require("../error");
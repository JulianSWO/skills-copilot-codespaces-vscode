// Create web server
// Load express module
var express = require('express');
var app = express();

// Load body-parser module
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Load mongoose module
var mongoose = require('mongoose');


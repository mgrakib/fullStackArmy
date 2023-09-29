/** @format */

require("dotenv").config("../.env");
const express = require("express");
const {errorHandelar, notFoundHander} = require('./error');

const app = express();

app.use(require('./middleware'))
app.use(require('./routes'))
app.use(notFoundHander);
app.use(errorHandelar);

module.exports = app;

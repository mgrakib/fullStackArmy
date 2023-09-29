/** @format */

require("dotenv").config("../.env");
const express = require("express");
const {errorHandelar, notFoundHander} = require('./error');
const myDb = require('../db/db');
const app = express();

myDb.create('user_1',5);
myDb.create("user_2", 5);

myDb.bulkCreate('userRakib', 50, 3)

const allTicket = myDb.find()
console.log(allTicket)


app.use(require('./middleware'))
app.use(require('./routes'))
app.use(notFoundHander);
app.use(errorHandelar);

module.exports = app;

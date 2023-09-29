/** @format */

require("dotenv").config("../.env");
const express = require("express");
const morgan = require("morgan");
const cors = require('cors');


const app = express();


app.use([
    morgan('dev'),
    cors(),
    express.json()
])

app.get("/health", (_req, res) => {
    throw new Error('Error')
	res.status(200).json({ message: "success" });
});


app.use((req, _res, next) => {
    const error = new Error('resourse not found');
    error.status = 404
    next(error)

})

// asfjkl

app.use((error, req, res, next) => {
    if (error.status) {
        return res.status(error.status).json({
            message: error.message
        })
    }

    res.status(500).json({
        message:'Something went wrong'
    })
})

module.exports = app;

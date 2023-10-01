const express = require('express')
const app = express()
const cors = require("cors");
const connectDB = require('./db/db')
const router = require('./routers/index')

const PORT = process.env.PORT || 4000;

app.use([cors(), express.json() ])

app.get('/', (req, res) => {
    res.status(200).json({message: 'all okay'})
})

app.use(router);


app.use((err, req, res, _next) => {
    const status = err.status || 500
    const message = err.message || "something went occurred";
	res.status(status).json({ message });
});

connectDB("mongodb://127.0.0.1:27017/attendance-db").then(
    console.log('database connect'),
    app.listen(PORT, () => {
	console.log(`attendance server is running on ${PORT}`);
})

).catch(e => {
    console.log(e)
});



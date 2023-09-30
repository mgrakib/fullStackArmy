const mongoose = require('mongoose')
function connectDB(connectUrl) {
    return mongoose.connect(connectUrl)
}

module.exports = connectDB
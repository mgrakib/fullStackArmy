const { Schema, model } = require('mongoose');
const { addListener } = require('./Profile');


const adminAttendanceSchema = new Schema({
    timeLimited: Number,
    status: String,
    createdAt: Date
})



const AdminAttendance = model(
	"AdminAttendance",
	adminAttendanceSchema
);

module.exports = AdminAttendance;
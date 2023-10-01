const { Schema, Model } = require('mongoose')

const adminAttendanceSchema = new Schema({
	timeLimit: Number,
	status: String,
	createdAt: Date,
});


const AdminAttendance = Model("AdminAttendance", adminAttendanceSchema);
module.exports = AdminAttendance;
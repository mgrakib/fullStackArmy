/** @format */

const { addMinutes, isAfter } = require("date-fns");
const { getStatus } = require("../service/attendance");
const error = require("../utils/error");
const AdminAttendance = require("../models/AdminAttendance");
const StudentAttendance = require("../models/StudentAttendance");

const getStudentStatus = async (req, res, next) => {
	try {
		const running = await getStatus();

		if (!running) {
			throw error(400, "Not Running");
		}

		const startTime = addMinutes(
			new Date(running.createdAt),
			running.timeLimit
		);

		if (isAfter(new Date(), startTime)) {
			running.status = "COMPLETED";
			await running.save();
		}

		res.status(200).json(running);
	} catch (e) {
		next(e);
	}
};

const studentPresent = async (req, res, next) => {
	const { id } = req.params;
	try {
		const adminAttendance = await AdminAttendance.findById(id);
		if (!adminAttendance) {
			throw error(404, "Invalid Admin Id");
		}

       
        if (adminAttendance.status === "COMPLETED") {
			throw error(404, "Attempted already completed here");
		}
        
        let attendance = await StudentAttendance.findOne({
			adminAttendance: id,
			user: req.user._id,
		});

        if (attendance) {
             throw error(404, "Your Attempted already completed");
        }

        attendance = new StudentAttendance({
			adminAttendance: id,
			user: req.user._id,
		});

        await attendance.save()
         console.log(attendance);
        res.status(200).json(attendance);
	} catch (e) {
		next(e);
	}
};
module.exports = { getStudentStatus, studentPresent };

/** @format */
const { addMinutes, isAfter } = require("date-fns");
const AdminAttendance = require("../models/AdminAttendance");
const error = require("../utils/error");

const getEnable = async (req, res, next) => {
	try {
		const running = await AdminAttendance.findOne({ status: "RUNNING" });
		if (running) {
			throw error(400, "Already Running");
		}

		const attendance = new AdminAttendance();
		await attendance.save();
		res.status(201).json(attendance);
	} catch (e) {
		next(e);
	}
};

const getStatus = async (req, res, next) => {
	try {
		const running = await AdminAttendance.findOne({ status: "RUNNING" });
		if (!running) {
			throw error(400, "Not Running");
		}

		const startedTime = addMinutes(
			new Date(running.createdAt),
			running.timeLimit
		);
		if (isAfter(new Date(), startedTime)) {
			running.status = "COMPLETED";
			await running.save();
		}

		res.status(200).json(running);
	} catch (e) {
		next(e);
	}
};

const getDisable = async (req, res, next) => {
	try {
		const running = await AdminAttendance.findOne({ status: "RUNNING" });
		if (!running) {
			throw error(400, "Not Running");
		}

		running.status = "COMPLETED";
		await running.save();

		res.status(201).json(running);
	} catch (e) {
		next(e);
	}
};

module.exports = { getEnable, getDisable, getStatus };

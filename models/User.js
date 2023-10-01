/** @format */

const { model, Schema } = require("mongoose");

const userSchema = new Schema({
	name: String,
	email: String,
	password: String,
	roles: {
		type: [String],
		default: "STUDENT",
	},
	accountStatus: { type: String, enum: ['PENDING', 'ACCEPT', 'REJECTED'], default: 'PENDING' },
});

const User = model("User", userSchema);

module.exports = User;

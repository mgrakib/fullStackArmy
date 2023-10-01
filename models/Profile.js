/** @format */

const { Schema, Model } = require("mongoose");

const profileSchema = new Schema({
	firstName: String,
	lastName: String,
	phone: String,
	avatar: String,
	user: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
});
const Profile = Model("Profile", profileSchema);

module.exports = Profile;

/** @format */

const { Schema, model } = require("mongoose");

const userSchema = new Schema({
	name: {
		type: String,
		maxlength: [6, "not more be 6"],
		minlength: [2, "must be 2"],
	},
	email: {
		type: String,
		validate: {
			validator: v => {
				return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
			},
			message: props => `${props.value} is not a valid Email!`,
		},
		required: [true, "User Email required"],
	},
	password: String,
    role: {
        type: [String],
        required: true,
        default: ['STUDENT']
    },
    
    accountStatus: {
        type: String,
        enum: ['PENDING', 'ACTIVE', 'REJECTED'],
        default:'PENDING'
    },
});

const User = model("User", userSchema);

module.exports = User;

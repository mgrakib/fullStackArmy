/** @format */

const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: [true, "Why no bacon?"],
		minlength: [3, "Too few eggs"],
		maxlength: [5, "max is 5"],
	},
	lastName: String,
	age: Number,
	single: Boolean,
});

const Person = mongoose.model("Person", personSchema);
mongoose
	.connect("mongodb://127.0.0.1:27017/mon-dom")
	.then(async () => {
		const person = new Person({
			firstName: "1",
			lastName: "Hasan",
			age: 26,
			single: true,
		});
		await person.save();
		console.log(person);
	})
	.catch(e => {
		console.log(e);
	})
	.finally(() => {
		mongoose.connection.close();
	});

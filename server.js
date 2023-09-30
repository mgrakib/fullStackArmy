/** @format */

const express = require("express");
const connectDB = require("./db/db");
const bcrypt = require("bcrypt");
const User = require("./models/User");
const PORT = process.env.PORT || 4000;
const app = express();

app.use([express.json()]);
app.get('/', (req, res) => {
    res.status(200).json({message: 'all is okay'})
})

app.post("/register", async (req, res, next) => {
	const { name, email, password } = req.body;

	if (!name || !email || !password) {
		return res.status(400).json({ message: "Invalid Data" });
	}

	try {
		let user = await User.findOne({ email });
		if (user) {
			return res.status(400).json({ message: "user already exist" });
		}
		user = new User({ name, email, password });
		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(password, salt);
        user.password = hash;
        
        await user.save()

        res.status(201).json({
            message:'create user successfuly',
            user
        })
	} catch (e) {
		next(e);
	}
});


app.use((err, req, res, _next) => {
    console.log(err)
    res.status(500).json({message: 'something went occurred'})
});

connectDB("mongodb://localhost:27017/attendance-db")
	.then(() => {
		console.log(`Data base Connect`);
		app.listen(PORT, () => {
			console.log(`attendence server is running on ${PORT}`);
		});
	})
	.catch(e => {
		console.log(e);
	});

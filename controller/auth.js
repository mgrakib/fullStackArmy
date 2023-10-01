const { registerService, loginService } = require("../service/auth");
const error  = require('../utils/error')

const registerController = async(req, res, next) => {
	const {name, password, email} = req.body;


	if (!name || !password || !email) {
		const errorT = error(400, 'Invalid Credential');
		throw errorT
	}
	
	try {
		const user = await registerService({ name, password, email });
		res.status(201).json({ message: "user created successful", user });
	} catch (e) {
		next(e);
	}
}

const loginController = async (req, res, next) => {
	const { email, password } = req.body;
	
	try { 
		if (!email || !password) {
			const errorT = error(400, "Invalid Credential");
			throw errorT;
		}

		const token = await loginService({ email, password })
		res.status(201).json({message: 'Login successful', token})

	}catch (e) {
		next(e)
	}

}
module.exports = {registerController, loginController}
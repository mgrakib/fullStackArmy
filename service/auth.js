/** @format */

const bcrypt = require("bcrypt");
const jwt =  require('jsonwebtoken')
const { findUserByProperty, creteUser } = require("./user");
const error = require("../utils/error");
const registerService = async ({ name, password, email }) => {
	const user = await findUserByProperty("email", email);

	if (user) {
		const errorS = error(400, "User is Already Exist");
		throw errorS;
	}

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

	return creteUser({ name, password: hash, email });
};


const loginService = async ({ email, password }) => {
    const user = await findUserByProperty("email", email);
    if (!user) {
        const errorS = error(400, "Invalid Credential form email");
		throw errorS;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
         const errorS = error(400, "Invalid Credential form pass");
			throw errorS;
    }
    const payload = {
        _id: user._id,
        name: user.name,
        email: user.email,
        roles: user.roles,
        accountStatus: user.accountStatus,

    }

    const token = jwt.sign(payload, "secret-key");
    return token

}
module.exports = { registerService, loginService };

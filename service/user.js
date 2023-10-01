/** @format */

const User = require("../models/User");
const error = require("../utils/error");
const getUsers = () => {
	return (user = User.find());
};

const findUserByProperty = (key, value) => {

	if (key === "_id") {
		return User.findById(value);
	}
	return User.findOne({ [key]: value });
};


const creteUser = ({ name, email, password, roles, accountStatus }) => {
	const user = new User({
		name,
		email,
		password,
		roles: roles ? roles : ["STUDENT"],
		accountStatus: accountStatus ? accountStatus : "PENDING",
	});
	return user.save();
};


const deleteUserService = (id) => {
    return  User.deleteOne({_id: id})
}

const putUpdateUserService = async(id, data) => {
    const user = await findUserByProperty('email', data.email);
    if (user) {
        throw error(400, 'User Already Exist')
    }

    return User.findByIdAndUpdate(id, { ...data }, { new: true })
    
    
}
module.exports = {
	findUserByProperty,
	creteUser,
	getUsers,
	deleteUserService,
	putUpdateUserService,
};

/** @format */

const userService = require("../service/user");
const authService = require("../service/auth");
const error = require("../utils/error");
// get all user
const getUsers = async (req, res, next) => {
	try {
		const users = await userService.getUsers();
		res.status(200).json(users);
	} catch (e) {
		next(e);
	}
};

const getUserById = async (req, res, next) => {
	const { userId } = req.params;
	try {
		const user = await userService.findUserByProperty("_id", userId);

		if (!user) {
			throw error(404, "User not found");
		}
		// TODO: we have to delete the password from user object
		return res.status(200).json(user);
	} catch (e) {
		next(e);
	}
};

const postUser = async (req, res, next) => {
	try {
		const { name, email, password, roles, accountStatus } = req.body;
		const user = await authService.registerService({
			name,
			email,
			password,
			roles,
			accountStatus,
		});
		res.status(201).json(user);
	} catch (e) {
		next(e);
	}
};

const deleteUserById = async (req, res, next) => {
	const { userId } = req.params;
	try {
		// Assuming userService.findUserByProperty returns a Mongoose model instance
		const user = await userService.findUserByProperty("_id", userId);

		if (!user) {
			throw new Error("User not found", 404);
		}

		// Use Mongoose's remove method to delete the user
		const deletedUser = await userService.deleteUserService(userId);

		return res.status(203).send();
	} catch (e) {
		next(e);
	}
};

const patchUserById = async (req, res, next) => {
	const { userId } = req.params;
	try {
		const { name, roles, accountStatus } = req.body;

		const user = await userService.findUserByProperty("_id", userId);
		if (!user) {
			throw error(404, "User not found");
		}

		user.name = name ?? user.name;
		user.roles = roles ?? user.roles;
		user.accountStatus = accountStatus ?? user.accountStatus;

		user.save();

		res.status(200).json({ message: "User Update Successful" });
	} catch (e) {
		next(e);
	}
};


const putUserById = async (req, res, next) => {
	const { userId } = req.params;
    const { name, roles, accountStatus, email } = req.body;
    
    try {
        const user = await userService.putUpdateUserService(userId, {
			name,
			roles,
			accountStatus,
			email,
		});

        if (!user) {
            throw error(404, 'User not found')
        }

        res.status(200).json(user)
    } catch (e) {
        next(e)
    }
};

module.exports = {
	getUsers,
	getUserById,
	postUser,
	deleteUserById,
	patchUserById,
	putUserById,
};

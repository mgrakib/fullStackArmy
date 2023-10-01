/** @format */

const router = require("express").Router();
const userController = require('../controller/user')
/**
 * @method delete
 *delete userId
 */
router.delete("/:userId", userController.deleteUserById);
/**
 * @method patch
 * update userId
 */
router.patch("/:userId", userController.patchUserById);
/**
 * @method Put
 * update userId
 */
router.put("/:userId", userController.putUserById);
/**
 * @method post
 * update userId
 */
router.post('/', userController.postUser)

/**
 * get user for single id
 */
router.get("/:userId", userController.getUserById);

/**
 * get all users
 * TODO: pagination , sort, filter, selcet
 */
router.get("/",  userController.getUsers);



module.exports = router;

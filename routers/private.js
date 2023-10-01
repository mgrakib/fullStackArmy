/** @format */

const router = require("express").Router();
const authenticate =  require('../middlewares/authenticate')
router.get("/private", authenticate, (req, res) => {
	res.status(200).json({ message: "i am private" });
});

module.exports = router;

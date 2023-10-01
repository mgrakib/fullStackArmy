const router = require('express').Router();
const authRouter = require('./auth')
const usersRouter = require('./users')
const authenticate = require("../middlewares/authenticate");
router.use('/api/v1', authRouter)
router.use("/api/v1/users",authenticate, usersRouter);

module.exports = router
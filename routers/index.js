const router = require('express').Router();
const authRouter = require('./auth')
const usersRouter = require('./users')
const adminAttendanceRoutes = require('./admin-attendance')
const studentAttendanceRoutes = require('./student-attendance')
const authenticate = require("../middlewares/authenticate");



router.use('/api/v1', authRouter)
router.use("/api/v1/users", authenticate, usersRouter);
router.use('/api/v1/admin', authenticate, adminAttendanceRoutes)
router.use("/api/v1/student", authenticate, studentAttendanceRoutes);

module.exports = router
const router = require('express').Router();
const { getStudentStatus, studentPresent } = require("../controller/student-attendance");



router.get("/status", getStudentStatus);
router.get("/:id", studentPresent);


module.exports =  router
const router = require('express').Router();
const authRouter = require('./auth')
const privateRouter = require('./private')

router.use('/api/v1', authRouter)
router.use('/api/p', privateRouter)

module.exports = router
const { signup, login } = require('../controller/participantAuth');

const router = require('express').Router();

//sign up for participant
router.post('/register', signup)

//login for participant
router.post('/login', login)


module.exports = router
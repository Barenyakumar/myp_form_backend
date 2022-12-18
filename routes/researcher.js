const { signup, login } = require('../controller/researchAuth');

const router = require('express').Router();

//signup for researchers
router.post('/register', signup)

//login for researchers
router.post('/login', login)


module.exports = router
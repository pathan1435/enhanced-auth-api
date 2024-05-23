const express = require('express');
const { register, login, googleAuth, googleAuthCallback } = require('../controllers/authController');
const passport = require('passport');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/google', googleAuth);
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), googleAuthCallback);

module.exports = router;

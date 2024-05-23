const { registerUser, loginUser } = require('../services/userService');
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('dotenv').config();

const register = async (req, res) => {
    try {
        const user = await registerUser(req.body);
        const payload = { user: { id: user.id, isAdmin: user.isAdmin } };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

const login = async (req, res) => {
    try {
        const user = await loginUser(req.body.email, req.body.password);
        const payload = { user: { id: user.id, isAdmin: user.isAdmin } };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

const googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

const googleAuthCallback = (req, res) => {
    res.redirect('/profile');
};

module.exports = {
    register,
    login,
    googleAuth,
    googleAuthCallback
};

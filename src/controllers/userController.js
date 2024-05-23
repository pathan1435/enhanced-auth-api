const User = require('../models/User');

const getUserProfile = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id, { attributes: { exclude: ['password'] } });
        res.json(user);
    } catch (error) {
        res.status(500).json({ msg: 'Server error' });
    }
};

const updateUserProfile = async (req, res) => {
    try {
        await User.update(req.body, { where: { id: req.user.id } });
        const user = await User.findByPk(req.user.id, { attributes: { exclude: ['password'] } });
        res.json(user);
    } catch (error) {
        res.status(500).json({ msg: 'Server error' });
    }
};

const getAllProfiles = async (req, res) => {
    try {
        const users = await User.findAll({
            where: req.user.isAdmin ? {} : { isPublic: true },
            attributes: { exclude: ['password'] },
        });
        res.json(users);
    } catch (error) {
        res.status(500).json({ msg: 'Server error' });
    }
};

const getUserProfileById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, { attributes: { exclude: ['password'] } });
        if (!user) return res.status(404).json({ msg: 'User not found' });

        if (!user.isPublic && !req.user.isAdmin) return res.status(403).json({ msg: 'Access denied' });

        res.json(user);
    } catch (error) {
        res.status(500).json({ msg: 'Server error' });
    }
};

module.exports = {
    getUserProfile,
    updateUserProfile,
    getAllProfiles,
    getUserProfileById
};

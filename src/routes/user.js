const express = require('express');
const { getUserProfile, updateUserProfile, getAllProfiles, getUserProfileById } = require('../controllers/userController');
const { auth, isAdmin } = require('../middleware/auth');

const router = express.Router();

router.get('/me', auth, getUserProfile);
router.put('/me', auth, updateUserProfile);
router.get('/profiles', auth, getAllProfiles);
router.get('/:id', auth, getUserProfileById);

module.exports = router;

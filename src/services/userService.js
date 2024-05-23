const User = require('../models/User');
const bcrypt = require('bcryptjs');

const registerUser = async (userData) => {
    const { name, email, password } = userData;
    let user = await User.findOne({ where: { email } });
    if (user) throw new Error('User already exists');

    user = User.build(userData);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    return user;
};

const loginUser = async (email, password) => {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error('Invalid credentials');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');

    return user;
};

module.exports = { registerUser, loginUser };

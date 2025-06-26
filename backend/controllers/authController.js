const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.getMe = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password');
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.refreshToken = (req, res) => {
    const token = req.cookies.refreshToken;
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_REFRESH_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403);
        const accessToken = jwt.sign(
            { id: decoded.id },
            process.env.JWT_ACCESS_SECRET,
            { expiresIn: '15m' }
        );
        res.json({ accessToken });
    });
};

exports.logout = (req, res) => {
    res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: true,
        sameSite: 'Strict',
    });
    res.sendStatus(204);
};

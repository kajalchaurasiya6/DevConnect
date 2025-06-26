// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');
const { getMe, refreshToken, logout } = require('../controllers/authController');
const { verifyAccessToken } = require('../middleware/authMiddleware');

// ✅ Use only defined route handlers'

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.get('/me', verifyAccessToken, getMe);
router.get('/refresh', refreshToken);
router.post('/logout', logout);

module.exports = router;

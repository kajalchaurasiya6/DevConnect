// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');
const { getMe, refreshToken, logout } = require('../controllers/authController');
const { verifyAccessToken } = require('../middleware/authMiddleware');
const validate = require('../middleware/validate');
const { body } = require('express-validator');

// ✅ Use only defined route handlers'

router.post('/signup',
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Please enter a valid email'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    ],
    validate,
    registerUser);
router.post('/login',
    [
        body('email').isEmail().withMessage('Enter a valid email'),
        body('password').notEmpty().withMessage('Password is required'),
    ],
    validate,
    loginUser);
router.get('/me', verifyAccessToken, getMe);
router.get('/refresh', refreshToken);
router.post('/logout', logout);

module.exports = router;

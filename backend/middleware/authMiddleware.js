const jwt = require('jsonwebtoken');

exports.verifyAccessToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.sendStatus(401);

    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403);
        req.userId = decoded.id;
        next();
    });
};

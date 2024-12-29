const jwt = require('jsonwebtoken');
const JSON_SECRET_kEY = "d4f7b2e1c9a8f3g6h1k0j4p9l2m8o7r6x5v2y3z1t0w9n8b6q5s7v4u1y3k8t5";

const jasonWebTokenAuthentic = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: 'No token provided' });
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, JSON_SECRET_kEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid or expired token' });
        }
        req.user = user;
        next();
    });
};

module.exports = jasonWebTokenAuthentic;
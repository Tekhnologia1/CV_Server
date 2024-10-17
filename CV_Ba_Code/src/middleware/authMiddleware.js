const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: 'Token is required' });
    }

    jwt.verify(token, 'Tekhnologia@99', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        req.userId = decoded.id;
        req.role_id = decoded.role_id;
        next();
    });
};

module.exports = { verifyToken };

const jwt = require('jsonwebtoken');

const secret = 'test_secret';
const expiration = '2h';

module.exports = {
    authMiddleware: function (req, res, next) {
        let token = req.query.token || req.headers.authorization;

        if (req.headers.authorization){
            token = token.split(' ').pop().trim();
        }

        //no token, no entry
        if (!token) {
            return res.status(400).json({ message: 'You have no token!' });
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;

        } catch (error) {
            console.log(error, 'Token verification error');
            return res.status(400).json({ message: 'Token is invalid!' });
        }
        next();
    },
    signToken: function ({ username, email, _id }) {
        const payload = { username, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration});
    },
    //removeToken
    removeToken: function ({ token}) {
        revokedTokens.add(token);
    },
};
const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');

const Authenticate = async (req, res, next) => {
    try {
        // get token from cookies
        const token = req.cookies.jwtoken;
        // varify taken token with jsonwebtoken
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        // find and match user from db
        const rootUser = await User.findOne({ _id: verifyToken._id, 'tokens.token': token });
        // if user not found
        if (!rootUser) { throw new Error('User not found') }
        // if user found
        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id;
        // finally call next operation/task
        next();
    } catch (err) {
        res.status(401).send('Unauthorized : No token provided!');
        console.log(err);
    }
}

module.exports = Authenticate;
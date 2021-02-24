const jwt = require('jsonwebtoken');
const asyncHandler = require('./asynchHandler');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../model/usermodel');

exports.protect = asyncHandler(async (req, res, next) => {
    let token
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }

    //make sure token exist
    if (!token) {
        return next(new ErrorResponse('Not Authorixe to access this route', 401));
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decode);
        req.user = await User.findById(decode.id);
        next();
    }
    catch (err) {
        return next(new ErrorResponse('Not Authorixe to access this route', 401));
    }
})
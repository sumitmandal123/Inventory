const User = require("../model/usermodel");
const { sendTokenResponse } = require('../utils/commonFunction');

exports.register = async (res, req) => {
    const { name, email, password, role } = req.body;
    const user = await User.create({
        name,
        email,
        password,
        role
    });
    sendTokenResponse(user, 200, res)
}

exports.login = async (res, req) => {
    const { email, password } = req.body;


    //Validate email and password
    if (!email || !password) {
        return new ErrorResponse('please provide an email and pssword', 400);
    }

    const userData = await User.findOne({ email }).select('+password');

    if (!userData) {
        return new ErrorResponse('please provide valid email and password', 401);
    }

    const isMtch = await userData.matchPassword(password);

    if (!isMtch) {
        return new ErrorResponse('please provide valid email and password', 401);
    }

    sendTokenResponse(userData, 200, res);
}
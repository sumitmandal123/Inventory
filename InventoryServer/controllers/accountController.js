const { json } = require("express");
const { register, login } = require('../service/accoutnService')

const asyncHandler = require("../middleware/asynchHandler")
const ErrorResponse = require("../utils/errorResponse");

exports.register = asyncHandler(async (req, res, next) => {
    return await register(res, req);


});


exports.login = asyncHandler(async (req, res, next) => {
    return await login(res, req);
});

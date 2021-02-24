const { register, login } = require('../dataAccess/AccountData')


exports.register = async (res, req) => {
    return await register(res, req);
}

exports.login = async (res, req) => {
    return await login(res, req);
}
const validator = require('validator')

exports.validatePassword = function validatePassword(password) {
    return password?.length > 5
}

exports.validateUserName = function validateUserName(userName) {
    return userName?.length > 3
}

exports.validateEmail = function validateEmail(email) {
    return validator.isEmail(email)
}
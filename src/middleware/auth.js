const { validateEmail, validatePassword, validateUserName } = require('./validation/user')

exports.validateLogin = function (req, res, next) {
    const { email = '', password = '' } = req.body

    const isValidEmail = validateEmail(email)
    const isValidPassword = validatePassword(password)

    if (!isValidEmail || !isValidPassword) {
        return res.status(400).json({
            error: true,
            invalidFields: {
                ... !isValidEmail && { email },
                ... !isValidPassword && { password },
            }
        })
    }

    next()
}



exports.createUserValidation = function (req, res, next) {
    const { username = '', email = '', password = '' } = req.body

    const isValidUserName = validateUserName(username)
    const isValidEmail = validateEmail(email)
    const isValidPassword = validatePassword(password)

    if (!isValidUserName || !isValidEmail || !isValidPassword) {
        return res.status(400).json({
            error: true,
            invalidFields: {
                ... !isValidUserName && { username },
                ... !isValidEmail && { email },
                ... !isValidPassword && { password },
            }
        })
    }
    next()
}

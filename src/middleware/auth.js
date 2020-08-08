const { validateEmail, validatePassword, validateUserName } = require('./validation/user')
const jwt = require('jsonwebtoken')
const { JWT_KEY } = require('../config')
const { getUserByToken } = require('../service/user')

exports.auth = async function (req, res, next) {
    const token = req.header('Authorization')?.replace('Bearer ', '')
    if(!token) return res.sendStatus(401)
    const data = jwt.verify(token, JWT_KEY)
    const user = await getUserByToken(data._id, token)
    if(!user) return res.sendStatus(401)

    req.user = user
    req.token = token
    next()
}

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


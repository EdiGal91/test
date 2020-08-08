const authService = require('../service/auth')
const userService = require('../service/user')

exports.login = async function (req, res) {
    const { email, password } = req.body
    const isLoggedIn = await authService.login(email, password)

    if(!isLoggedIn) return res.sendStatus(400)

    res.json({isLoggedIn})
}

exports.signup = async function(req, res) {
    const { username, email, password } = req.body
    try {
        const user = await userService.createUser(username, email, password)
        res.status(201).json(user)
    } catch(err) {
        console.error('createUser Error:',err.message);
        res.status(409).json(err)
    }
}


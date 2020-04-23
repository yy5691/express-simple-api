export default (options) => {
    const jwt = require('jsonwebtoken')
    const User = require('../db/models/User')
    return async(req, res, next) => {
        const token = req.headers.token
        if (!token) {
            res.send('token is avalid')
        } else {
            const { id } = jwt.verify(token, 'e3sh723849vb')
            if (!id) {
                res.send('token过期')
            } else {
                const user = await User.findById(id)
                if (!user) {
                    res.send('用户不存在')
                } else {
                    await next()
                }
            }
        }
    }
}
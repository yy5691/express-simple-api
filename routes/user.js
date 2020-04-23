import User from '../db/models/User'
export default (app, router) => {
    router.post('/initUserData', async(req, res) => {
        const { username, password } = req.body
        const model = await User.create({
            username,
            password
        })
    })

    router.get('/UserDataList', async(req, res) => {
        const model = await User.find({}).select('+password')
        res.send(model)
    })

    router.post('/login', async(req, res) => {
        const { username, password } = req.body
        const user = await User.findOne({ username }).select('+password')
    })
    app.use('/user', router)
}
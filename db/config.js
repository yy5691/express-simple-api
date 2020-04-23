const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/express-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

require('require-all')(__dirname + '/./models')
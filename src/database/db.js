const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://80developers:admin03001212@cluster0.vp85dli.mongodb.net/?retryWrites=true&w=majority')
mongoose.Promise = global.Promise

module.exports = mongoose

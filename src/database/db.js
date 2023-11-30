const mongoose = require('mongoose')
const dbConfig = require('../config/db')

mongoose.connect(dbConfig.url)
mongoose.Promise = global.Promise

module.exports = mongoose

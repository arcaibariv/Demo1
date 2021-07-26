

const mongoose = require('mongoose');
require('dotenv').config();

module.exports.dbConnection = async function () {
  return mongoose.connect (
    process.env.DB_HOST + process.env.DB_DATABASE,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
}
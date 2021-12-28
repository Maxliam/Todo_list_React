const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: {
    type: String,
  },
  desc: {
    type: String,
  },
})

const movieDB = mongoose.model('MovieDB', schema)

module.exports = movieDB;

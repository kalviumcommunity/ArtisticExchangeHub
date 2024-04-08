// models/User.js

const mongoose = require('mongoose');
const { type } = require('os');

const userSchema =  mongoose.Schema({
  email : String,
  password : String,
  username : String,
  profile : String,

});

const User = mongoose.model('user', userSchema);

module.exports = {User};

// models/User.js

const mongoose = require('mongoose');
// const { type } = require('os');

const userSchema =  mongoose.Schema({
  email : String,
  username : String,
  password : String,
  profile : String
});

const User = mongoose.model('user', userSchema);

module.exports = {User};
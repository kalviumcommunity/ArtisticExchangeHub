// models/User.js

const mongoose = require('mongoose');
const { type } = require('os');

const userSchema =  mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  myfile: String 
});

const User = mongoose.model('user', userSchema);

module.exports = {User};

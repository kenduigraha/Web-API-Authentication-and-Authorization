'use strict'

const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const validate = require('mongoose-validator');

let Schema = mongoose.Schema

var passwordValidator = [
  validate({
    validator: 'isLength',
    arguments: [3, 50],
    message: 'Password should be between {ARGS[0]} and {ARGS[1]} characters'
  })
]

var emailValidator = [
  validate({
    validator: 'isEmail',
    message: 'Please provide a valid email address'
  })
]

let UserSchema = new Schema({
  username : {
    type: String,
    required: true
  },
  password : {
    type: String,
    validate: passwordValidator
  },
  email : {
    type: String,
    required: true,
    validate: emailValidator
  },
  role : String
})

UserSchema.path('password').validate(function (password) {
  if(password.text.length < 5){
    return false
  }else{
    return true
  }
}, 'password length should min 5 chars.')

// UserSchema.path('email').validate(validator.isEmail(), 'Please provide a valid email address');

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('Users', UserSchema)

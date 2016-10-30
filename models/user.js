'use strict'

const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

let Schema = mongoose.Schema

let UserSchema = new Schema({
  username : {
    type: String,
    required: true
  },
  password : {
    type: String,
    required: true,
    minlength: 5
  },
  email : {
    type: String,
    required: true
  },
  role : String
})

UserSchema.plugin(passportLocalMongoose)

UserSchema.path('email').validate(function (email) {
   var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
   return emailRegex.test(email.text); // Assuming email has a text attribute
}, 'The e-mail field cannot be empty.')

module.exports = mongoose.model('Users', UserSchema)

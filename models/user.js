'use strict'

const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

let Schema = mongoose.Schema

let UserSchema = new Schema({
  username : String,
  email: String,
  role: String
})

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('Users', UserSchema)

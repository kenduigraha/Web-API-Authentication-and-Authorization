'use strict'
const User = require('../models/user')

let loginProperty = (user_session, cb) => {
  User.findOne({
    username: user_session.username
  }, 'username role email',
  (err, userLogin) => {
    cb(userLogin)
  })
}

module.exports = {
  loginProperty: loginProperty
}

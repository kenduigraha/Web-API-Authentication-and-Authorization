'use strict'
const User = require('../models/user')
const passport = require('passport')
//helper
const helper = require('../helpers/loginProperty')

let viewHome = (req, res, next) => {
  if(typeof req.user != "undefined"){
    helper.loginProperty(req.user, (userLogin) => {
      User.find({
        role: 'Student'
      }, (err, dataStudent) => {
          res.render('index', {title: 'Student\'s Apps', user: userLogin, dataStudent: dataStudent})
      })
    })
  }else{
    res.render('index', {title: 'Student\'s Apps'})
  }
}

let viewSignUp = (req, res, next) => {
  res.render('signup', {title: 'Student\'s Apps'})
}

let processSignUp = (req, res, next) => {
  User.register({
    username: req.body.username,
    email: req.body.email,
    role: req.body.role
  }, req.body.password, (err, user) => {
    if(err) {
      console.log(err)

      res.render('signup', {title: 'Student\'s Apps', err: err})
    }else{
        passport.authenticate('local')(req, res, () => {
          req.session.save((err) => {
            if(err){
              next(err)
            }else{
              res.redirect('/')
            }
          })
        })
    }
  })
}

let viewLogin = (req, res, next) => {
  res.render('login', {title: 'Student\'s Apps'})
}

let processLogin = (req, res, next) => {
  res.redirect('/')
}

let processLogout = (req, res, next) => {
  req.logout()
  res.redirect('/')
}

let viewEditData = (req, res, next) => {
  User.findOne({
    _id: req.params.id
  }, 'username email', (err, userEdit) => {
    res.render('editData', {title: 'Student\'s Apps', userEdit: userEdit})
  })
}

let processEditData = (req, res, next) => {
  User.findOneAndUpdate({
    _id: req.body.id
  }, req.body, (err, userUpdated) => {
    res.redirect('/')
  })
}

let processDelete = (req, res, next) => {
  User.findOneAndRemove({
    _id: req.params.id
  }, (err) => {
    if(err) console.log(err)
    res.redirect('/')
  })
}

module.exports = {
  viewHome: viewHome,
  viewSignUp: viewSignUp,
  processSignUp: processSignUp,
  viewLogin: viewLogin,
  processLogin: processLogin,
  processLogout: processLogout,
  viewEditData: viewEditData,
  processEditData: processEditData,
  processDelete: processDelete
}

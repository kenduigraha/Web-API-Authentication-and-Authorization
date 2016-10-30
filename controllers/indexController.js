'use strict'
const User = require('../models/user')
const passport = require('passport')

let viewHome = (req, res, next) => {
  res.render('index', {title: 'Student\'s Apps'})
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

      res.render('signup', {title: 'Student\'s Apps', err_message: err.message})
    }else{
        passport.authenticate('local')(req, res, () => {
          req.session.save((err) => {
            if(err){
              next(err)
            }else{
              console.log(req.user);
              res.redirect('/', {title: 'Student\'s Apps', user: req.user})
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
  res.render('index', {title: 'Student\'s Apps'})
}

let viewAddData = (req, res, next) => {
  res.render('addData', {title: 'Student\'s Apps'})
}

let processAddData = (req, res, next) => {
  res.render('index', {title: 'Student\'s Apps'})
}

let viewEditData = (req, res, next) => {
  res.render('editData', {title: 'Student\'s Apps'})
}

let processEditData = (req, res, next) => {
  res.render('index', {title: 'Student\'s Apps'})
}

let processDelete = (req, res, next) => {
  res.render('index', {title: 'Student\'s Apps'})
}

module.exports = {
  viewHome: viewHome,
  viewSignUp: viewSignUp,
  processSignUp: processSignUp,
  viewLogin: viewLogin,
  processLogin: processLogin,
  viewAddData: viewAddData,
  processAddData: processAddData,
  viewEditData: viewEditData,
  processEditData: processEditData,
  processDelete: processDelete
}

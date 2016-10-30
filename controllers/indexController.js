'use strict'

let viewHome = (req, res, next) => {
  res.render('index', {title: 'Student\'s Apps'})
}

let viewSignUp = (req, res, next) => {
  res.render('signup', {title: 'Student\'s Apps'})
}

let processSignUp = (req, res, next) => {
  res.render('index', {title: 'Student\'s Apps'})
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
  viewLogin: ViewLogin,
  processLogin: processLogin,
  viewAddData: viewAddData,
  processAddData: processAddData,
  viewEditData: viewEditData,
  processEditData: processEditData,
  processDelete: processDelete
}

'use strict'

let checkLogin = (req, res, next) => {
  if(req.isAuthenticated()){
    res.redirect('/')
  }else{
    return next()
  }
}

let checkSignup = (req, res, next) => {
  if(req.isAuthenticated()){
    res.redirect('/')
  }else{
    return next()
  }
}

module.exports = {
  checkLogin: checkLogin,
  checkSignup: checkSignup
}

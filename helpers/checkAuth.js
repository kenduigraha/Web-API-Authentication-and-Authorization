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

let checkForm = (req, res, next) => {
  console.log(req.body);
  if(req.body.password.length < 5){
    let err = {
      name: "ValidationError",
      errors: {
        password : {
          message: "Password should 5 length"
        }
      }
    }
    res.render('signup', {err: err, value: req.body})
  }else{
    return next()
  }
}

module.exports = {
  checkLogin: checkLogin,
  checkSignup: checkSignup,
  checkForm: checkForm
}

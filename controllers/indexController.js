'use strict'

let viewHome = (req, res, next) => {
  res.render('index', {title: 'Student\'s Apps'})
}

module.exports = {
  viewHome: viewHome
}

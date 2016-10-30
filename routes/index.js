var express = require('express');
var router = express.Router();
// controller
var controller = require('../controllers/indexController')
// passport
const passport = require('passport');
//middleware
const middleware = require('../helpers/checkAuth')


/* show home page. */
router.get('/', controller.viewHome);

/* show signup form. */
router.get('/signup', middleware.checkSignup, controller.viewSignUp);

/* process signup page. */
router.post('/signup', controller.processSignUp);

/* show login form. */
router.get('/login', middleware.checkLogin, controller.viewLogin);

/* process login page. */
router.post('/login', passport.authenticate('local', {failureRedirect: '/login'}), controller.processLogin);

/* show login form. */
router.get('/logout', controller.processLogout);

/* show edit a data form. */
router.get('/edit/:id', controller.viewEditData);

/* process edit a data form. */
router.post('/edit', controller.processEditData);

/* process delete data form. */
router.get('/delete/:id', controller.processDelete);

module.exports = router;

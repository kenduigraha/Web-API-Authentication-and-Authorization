var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexController')

/* show home page. */
router.get('/', controller.viewHome);

/* show signup form. */
router.get('/signup', controller.viewSignUp);

/* process signup page. */
router.post('/signup', controller.processSignUp);

/* show login form. */
// router.get('/login', controller.viewLogIn);
//
// /* process login page. */
// router.post('/login', controller.processLogin);
//
// /* show add new data form. */
// router.get('/add', controller.viewAddData);
//
// /* process add new data form. */
// router.post('/add', controller.processAddData);
//
// /* show edit a data form. */
// router.get('/edit/:id', controller.viewEditData);
//
// /* process edit a data form. */
// router.post('/edit', controller.processEditData);
//
// /* process delete data form. */
// router.get('/delete/:id', controller.processDelete);

module.exports = router;

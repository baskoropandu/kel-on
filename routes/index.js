const router = require('express').Router();
const Controller = require('../controllers/controller');

router.get('/', Controller.home)
router.get('/login', Controller.login)
// router.post('/login', Controller.postLogin)
router.get('/register', Controller.register)
router.post('/register', Controller.postregister)

module.exports = router
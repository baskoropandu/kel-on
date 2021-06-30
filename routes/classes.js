const router = require('express').Router();
const Controller = require('../controllers/classes');

router.get('/', Controller.getAll)
router.get('/add', Controller.getAddClass)
router.post('/add', Controller.postAddClass)

module.exports = router
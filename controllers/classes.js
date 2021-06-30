const {Class} = require('../models/index');

class ClassController {
    static getAll(req, res) {
        Class
            .findAll()
            .then(listClass => {
                res.render('listClass', {listClass})
            })
    }

    static getAddClass(req, res) {
        res.render('addClass')
    }

}

module.exports = ClassController
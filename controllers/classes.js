const { Class, User } = require('../models/index');
const { Op } = require("sequelize");

class ClassController {
    static getAll(req, res) {
        Class
            .findAll({
                include: {
                    model: User,
                    where: {
                        is_instructor: {
                            [Op.eq]: 'true'
                        }
                    },
                    attributes: ['name']
                }
            })
            .then(listClass => {
                console.log(listClass[0].User);
                res.render('listClass', {listClass})
            })
    }

    static getAddClass(req, res) {
        User
            .findAll({
                where: {
                    is_instructor: {
                        [Op.eq]: 'true'
                    }
                },
                attributes: ['name', 'id']
            })
            .then(listInstructor => {
                console.log(listInstructor);
                res.render('addClass', {listInstructor})
            })
            .catch(err => {
                console.log(err);
                res.send(err)
            })
    }

    static postAddClass(req, res) {
        let newClass = {
            name_class: req.body.name_class,
            quota: req.body.quota,
            level: req.body.level,
            InstructorId: req.body.InstructorId,
        }

        Class
            .create(newClass)
            .then(data => {
                res.redirect('/classes')
            })
            .catch(err => {
                console.log(err);
                res.send(err)
            })
    }

}

module.exports = ClassController
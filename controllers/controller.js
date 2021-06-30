const {User} = require('../models/index');

class Controller {
    static home(req, res) {
        res.render('home')
    }

    static login(req, res) {
        res.render('login')
    }

    static register(req, res) {
        res.render('register')
    }

    static postregister(req, res) {
        let newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            level: req.body.level,
            is_instructor: req.body.is_instructor,
        }
        if (!req.body.is_instructor) {
            newUser.is_instructor = false
        }
        
        User
            .create(newUser)
            .then(data => {
                res.redirect(`/${data.id}/classes`)
            })
            .catch(err => {
                console.log(err);
                res.send(err)
            })
    }    
}

module.exports = Controller
const {User} = require('../models/index');

class Controller {
    static home(req, res) {
        // console.log(req.session);
        res.render('home')
    }

    static login(req, res) {
        let err = req.query.err
        res.render('login', {err})
    }

    static postLogin(req, res) {
        let email = req.body.email
        let password = req.body.password

        User.findAll({
                where: { email }
             })
            .then(result=>{
                if (result.length === 0) {
                    let error = ['Email Not Found']

                    res.redirect(`/login?err=${error}`)

                } else if (result[0].password === password) {
                    req.session.isLogin = true
                    req.session.is_instructor = result[0].is_instructor
                    req.session.name = result[0].name
                    req.session.UserId = result[0].id

                    console.log(req.session);
                    res.redirect('/classes')
                } else {
                    let error = ['Pasword Wrong']
                    
                    res.redirect(`/login?err=${error}`)
                }
                // res.send(result)
            })
        // res.redirect('/classes')
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
                res.redirect(`/login`)
            })
            .catch(err => {
                console.log(err);
                res.send(err)
            })
    }
    
    static logout(req, res) {
        req.session.destroy()
        res.redirect('/')
    }
}

module.exports = Controller
const {User} = require('../models/index');

class Controller {
    static home(req, res) {
        // console.log(req.session);
        res.render('home')
    }

    static login(req, res) {
        res.render('login')
    }

    static postLogin(req, res) {
        let email = req.body.email
        let password = req.body.password

        User.findAll({where:{email}})
            .then(result=>{
                if(result.length === 0){
                    res.send('email not found')
                }else if(result[0].password === password){
                    res.redirect('/classes')
                }else{
                    res.send('wrong password')
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
        res.redirect('/')
    }
}

module.exports = Controller
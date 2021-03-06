const express = require('express');
const routes = require('./routes/index');
const session = require('express-session');

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(session({
  secret: 'keLon - kelas onlen',
  resave: false,
  saveUninitialized: true
}))

const myLogger = (req, res, next) => {
  if (req.session.isLogin === true) {
    next()
  }
  else {
    let err = ['anda harus login terlebih dahulu']
    res.redirect(`/login?err=${err}`)
  }
}

app.use(express.urlencoded({extended:true}))
app.use('/', routes)



app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})


/*
0. .gitignore (node_modules)
1. npm init -y
2. npm i express sequelize pg ejs
3. npm i -D nodemon sequelize-cli
4. sequelize init
5. config/config.js (postgres, 822413)
6. sequelize db:create
7. sequelize model:generate --name <Class> --attributes <kolom>
8. sequelize migration:generate --name <action-name>
9. sequelize db:migrate
9. sequelize seed:generate --name <seed-name>
10. sequelize db:seed:all
10. async hapus , await => return
11. File app (port, express, view engine, urlencoded, listen)
12. has many, belongs to https://sequelize.org/v5/manual/associations.html#one-to-many-associations--hasmany-
13. include https://sequelize.org/v5/manual/querying.html#relations---associations
14. create https://sequelize.org/master/manual/model-querying-basics.html#simple-insert-queries
15. hooks https://sequelize.org/master/manual/hooks.html#declaring-hooks

*/
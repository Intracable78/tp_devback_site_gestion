const express = require('express')
const app = express()
const port = 5500
const loginController = require('./Controllers/loginController');
const registerController = require('./Controllers/registerController');
const categoryController = require('./Controllers/categoryController');
const configController = require('./Controllers/configController');
const isAuth = require('./middleware/isAuth')
const isAdmin  = require('./middleware/isAdmin');
var cors = require('cors')
app.use(express.json());
app.use(cors())





app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

app.use('/register', registerController);
app.use('/login', loginController);
app.use('/admin', categoryController);
app.use('/admin/config', configController);

// route de test pour voir si le token jwt est valid 
app.get('/me', isAuth,  (req, res) => {
  res.send('Hello World!')
})


app.get('/verify', isAdmin, (req, res) => {
 res.send('you are amdin')
})


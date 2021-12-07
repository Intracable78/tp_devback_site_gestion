const express = require('express');
const router  = express.Router();
const db = require('../models/index');
const User = require("../models/user")(db.sequelize, db.Sequelize.DataTypes);
const bcrypt = require('bcrypt');
const app = express();

//enable cors 

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });



const EMAIL_REGEX =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const saltRounds = 10;



router.post('/', async (req, res) => {

    let email = req.body.email;
    let password = req.body.password;
    let firstName = req.body.firstname;
    let lastName = req.body.lastname;
    let userName = req.body.username;
    let numberPhone = req.body.phone;
    let address = req.body.address;
    let city = req.body.city;
    let country = req.body.country;

    console.log(email)
    console.log(password)
    console.log(firstName)
    console.log(lastName)
    console.log(userName)
    console.log(numberPhone)
    console.log(address)
    console.log(city)
    console.log(country)
    

    
    
    if(!email || !password || !firstName || !lastName || !userName || !numberPhone || !address || !city || !country) {
        return res.status(400).json('error :  missing parameters');
    }
        
    if(!EMAIL_REGEX.test(email)) {
        return res.status(404).json('error : email is not valid');
    }

    if(!PASSWORD_REGEX.test(password)) {
        return res.status(404).json('error : password invalid (must length 6 - 16, 1 lowercase, 1 uppercase and 1 special character )');
    }
        
    const userFind = await User.findOne({ where: { 
        email: email}
    })

    if(!userFind) {
        console.log("User doesn't exist in database, we create it !")
        try {
            bcrypt.hash(password, saltRounds, async (err, hash) => {

                 let createUser = await User.create({
                    email: email,
                    password: hash,
                    username: userName,
                    firstname: firstName,
                    lastname: lastName,
                    phone: numberPhone,
                    address: address,
                    city: city,
                    country: country,
                    created_At: Date.now(),
                    updated_At: Date.now()  
                })

                if(createUser){
                     res.send('User has been created successfully !')
                }

                else{
                    console.log(err)
                }

                });
}
        catch(err){
            console.log(err)
        }
    }
    if(userFind instanceof User) {
        return res.status(404).json('user already exist !')
    } 
})

module.exports = router;
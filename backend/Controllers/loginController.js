const express = require('express');
const router  = express.Router();
const db = require('../models/index');
const User = require("../models/user")(db.sequelize, db.Sequelize.DataTypes);
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();


router.post('/', async (req, res) => {

try {
    const email = req.body.email;
    const password = req.body.password;
    
    if(!email || !password) {
        res.status(400).send('All input is required');
    }
    
    const verifyUserExist = await User.findOne({ where: { 
        email: email
    }
    
    });
    
    if(verifyUserExist && (await bcrypt.compare(password, verifyUserExist.password))){
        console.log(verifyUserExist)
        
            const token = jwt.sign(
                { user_id: verifyUserExist.id, user_role: verifyUserExist.roles },
                process.env.TOKEN_KEY,
                { expiresIn: "24h"}
            );
           
            const decode = jwt.decode(token);
            console.log(decode);
    
            res.status(200).json({
                succes: true,
                idToken: token, 
                user_id: verifyUserExist.id,
              });
    }
        
    else{
        res.status(400).send('Incorrect email or password');
    }
} catch(err){
    console.log(err);
}

})



module.exports = router;
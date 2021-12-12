const express = require('express');
const router  = express.Router();
const db = require('../models/index');
const Reservation = require("../models/reservation")(db.sequelize, db.Sequelize.DataTypes);

router.post('', async (req, res) => {
    try{

        

    } catch(err){
        console.log(err)
    }
})
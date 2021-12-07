const express = require('express');
const router  = express.Router();
const db = require('../models/index');
const Config = require("../models/config")(db.sequelize, db.Sequelize.DataTypes);

router.post('', async(req, res) => {

    try{


        let start = req.body.start;
        let end = req.body.end;
        let description = req.body.description;
        let title = req.body.title;
        let backgroundColor = req.body.background_color;

        if(!start || !end || !description || !title || !backgroundColor){

            return res.status(400).send('All input are required exept backgroundColor'); 

        }

        let createConfig = await Config.create({
            start: start,
            end: end,
            title: title,
            description: description,
            background_color: backgroundColor
        })

        if(createConfig){
            console.log("created")
            return res.status(200).send('Course has been created successfully');
        }


    } catch(err){
        console.log(err)
    }



})


router.get('', async (req, res) => {

    try{
        const configs = await Config.findAll();
        const filteredConfigs = [];

        if(configs){
            console.log(configs)
            configs.forEach(config => {
                filteredConfigs.push({
                    'id': config.id,
                    'start': config.start.replace("T", " "),
                    'end' : config.end.replace("T", " "),
                    'title': config.title,
                    'description': config.description,
                    'background_color': config.background_color
                })
            })

            return res.status(200).json(filteredConfigs);
        }

        else {
            return res.status(404).send('Configs not found');
        }


    } catch(err){



    }




})

module.exports = router;
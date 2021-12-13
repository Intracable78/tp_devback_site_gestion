const express = require('express');
const router = express.Router();
const db = require('../models/index');
const Config = require("../models/config")(db.sequelize, db.Sequelize.DataTypes);

router.post('', async (req, res) => {

    try {
        let start = req.body.start;
        let end = req.body.end;
        let description = req.body.description;
        let title = req.body.title;
        let backgroundColor = req.body.background_color;
        let category_id = req.body.category_id;

        if (!start || !end || !description || !title || !backgroundColor) {

            return res.status(400).send('All input are required exept backgroundColor');

        }

        let createConfig = await Config.create({
            start: start,
            end: end,
            title: title,
            description: description,
            background_color: backgroundColor,
            category_id: category_id
        })

        if (createConfig) {
            console.log("created")
            return res.status(200).send('Course has been created successfully');
        }

    } catch (err) {
        console.log(err)
    }

})

router.get('', async (req, res) => {
    try {
        const configs = await Config.findAll();
        const filteredConfigs = [];

        if (configs) {
            configs.forEach(config => {
                if (!config.user_id) {
                    filteredConfigs.push({
                        'id': config.id,
                        'start': config.start.replace("T", " "),
                        'end': config.end.replace("T", " "),
                        'title': config.title,
                        'description': config.description,
                        'background_color': config.background_color
                    })
                }
                else {
                    return;
                }

            })
            return res.status(200).json(filteredConfigs);
        }

        else {
            return res.status(404).send('Configs not found');
        }


    } catch (err) {
        console.log(err);
    }
})

router.get('/:categoryId', async (req, res) => {
    let categoryId = req.params.categoryId;
    try {
        const configs = await Config.findAll({
            where:
                { category_id: categoryId }
        });
        const filteredConfigs = [];
        if (configs) {
            configs.forEach(config => {
                if (!config.user_id) {
                    filteredConfigs.push({
                        'id': config.id,
                        'start': config.start.replace("T", " "),
                        'end': config.end.replace("T", " "),
                        'title': config.title,
                        'description': config.description,
                        'background_color': config.background_color
                    })
                }
                else {
                    return res.status(404).render("Available")
                }

            })
            return res.status(200).json(filteredConfigs);
        }

        else {
            return res.status(404).send('Configs not found');
        }


    } catch (err) {
        console.log(err);
    }
})

module.exports = router;
const express = require('express');
const router = express.Router();
const db = require('../models/index');
const Category = require("../models/category")(db.sequelize, db.Sequelize.DataTypes);
const isAuth = require('../middleware/isAuth');


router.post('/', async (req, res) => {


    try {
        let title = req.body.title;
        let description = req.body.description;
        let slug = req.body.slug;
        let file = req.body.file;

        if (!title || !description || !slug || !file) {
            return res.status(400).send('all input are required')
        }

        let createCategory = await Category.create({
            title: title,
            description: description,
            slug: slug,
            file: file
        })

        if (createCategory) {
            return res.status(200).send('Category has been created successfully');
        }

    } catch (err) {
        console.log(err);
    }

})

router.get('/category', async (req, res) => {
    const categories = await Category.findAll();

    if (categories) {
        return res.status(200).send(categories)
    }

    else {
        return res.status(404).send('Category not found');
    }

})

module.exports = router;
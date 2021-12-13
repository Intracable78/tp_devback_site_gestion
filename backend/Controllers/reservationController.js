const express = require('express');
const router = express.Router();
const db = require('../models/index');
const Config = require("../models/config")(db.sequelize, db.Sequelize.DataTypes);

router.post('/:eventId', async (req, res) => {
    try {

        let userId = req.body.userId;
        let eventId = req.params.eventId;

        console.log(userId)
        console.log(eventId)

        let findEventById = await Config.findOne({ where: { id: eventId } });
        if (!findEventById) {
            return res.status(404).render("Event invalid")
        }
        console.log("ok")

        const updatedArticle = await findEventById.update({
            user_id: userId,
        })

        res.status(200).json(updatedArticle);

    } catch (err) {
        console.log(err)
    }
})

module.exports = router;
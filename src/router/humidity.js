const express = require('express');
const router = new express.Router();
const Humidity = require('../model/humidity');

router.post('/api/v1/humi/:id', async (req, res) => {
    try {
        const humidity_point = new Humidity({
            ...req.body, 
            id : req.params.id
        })

        await humidity_point.save();
        res.status(201).send(humidity_point);
    } catch {
        res.status(400).send();
    }
});

module.exports = router;
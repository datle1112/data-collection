const express = require('express');
const route = new express.Router();
const Temp = require('../model/temp');

route.post('/api/v1/temp/:id', async(req,res) => {
    try {
        const temp = new Temp({
            ...req.body, 
            id : req.params.id
        });
        await temp.save();
        res.status(201).send(temp);
    } catch(e) {
        res.status(400).send(e);
    }
});

module.exports = route;
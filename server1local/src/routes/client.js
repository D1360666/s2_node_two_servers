const express = require('express');
const clientSchema = require('../models/client');
const router = express.Router();

//create user
router.post('/clients', (req, res) =>{
    //res.send('create user');
    const client = clientSchema(req.body);
    console.log(req.body);
    client
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//Get users
router.get('/clients', (req, res) =>{
    clientSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//Get a user
router.get('/clients/:id', (req, res) =>{
    const { id } = req.params;
    clientSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//Update a user
router.put('/clients/:id', (req, res) =>{
    const { id } = req.params;
    const { name, age, email } = req.body;
    clientSchema
        .updateOne({ _id: id}, {$set: {name, age, email}})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//Delete a user
router.delete('/clients/:id', (req, res) =>{
    const { id } = req.params;
    
    clientSchema
        .remove({ _id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});
module.exports=router;
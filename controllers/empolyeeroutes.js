const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const logger = require('../config/logger');
const { json } = require('body-parser');
const employee = mongoose.model('emp');

router.get('/all', async (req, res) => {                     //to get all the records
     const post = await employee.find();
     logger.log('info',`getall -> allthedetails -> ${post} `);
     res.json(post);
});

router.get('/:postId', async (req, res) => {                //to get a specified record
    const post = await employee.findById(req.params.postId);
    res.json(post);
});

router.post('/create', async (req, res) => {        //to create a new record
    const post = new employee({
        fullname: req.body.fullname,
        email: req.body.email,
        mobile: req.body.mobile,
        city: req.body.city
    });
    try{
       const savedpost = await post.save();
       res.json(savedpost);
    }catch(err){
       res.json({ message: err });
    }
});

router.patch('/:postId', async (req, res) => {      //to update a existing record
    try{
       const updatedpost = await employee.updateOne(
           { _id: req.params.postId},
           { $set: {
               fullname: req.body.fullname,
               email: req.body.email,
               mobile: req.body.mobile,
               city: req.body.city
           }}
       );
       res.json(updatedpost);
    }catch(err){
       res.json({ message: err});
    }
});

router.delete('/:postId', async (req, res) => {               //to delete a record
    const removepost = await employee.remove({ _id: req.params.postId });
    res.json(removepost);
});

module.exports = router;
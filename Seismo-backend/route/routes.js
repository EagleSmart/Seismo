// rute do do fajlova koji ce da se renderuju sadrzi
// konektuje se do monga i vraca template (fajl koji se redneruje)

const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();


// const EarthquakeModel = mongoose.model("Earthquake");
// const UserModel = mongoose.model("UserModel");

const User = require('./../models/user.model');
const Earthquake = require('./../models/earthquake.model');

// uzimanje podataka
router.get("/earthquakes", (req, res)=>{
    Earthquake.find((err, docs)=>{
        if(!err){
            res.json(docs);
        }else{
            res.json(err);
        }
    });
  
});

// uzimanje podataka
router.get("/users", (req, res)=>{
    User.find((err, docs)=>{
        if(!err){
            res.json(docs);
        }else{
            res.json(err);
        }
    });
  
});


// insertovanje usera
router.post('/insert_user', (req, res, next)=>{
    let newUser = new User({
        user_id: req.body.user_id,
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        pwd: req.body.pwd
    });
    newUser.save((err, user)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({msg: 'User has been added sucessfully'});
        }
    });
});

// updatovanje usera
router.put('/users/:id', (req, res, next)=>{
    User.findOneAndUpdate({_id: req.params.id}, {
        $set:{
            user_id: req.body.user_id,
            username: req.body.username,
            name: req.body.name,
            email: req.body.email,
            pwd: req.body.pwd
        }
    },
    function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
});

// brisanje usera
router.put('/users/:id', (req, res, next)=>{
    User.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        else {
            res.json(result);
        }
    })
});

module.exports = router;
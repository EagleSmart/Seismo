// rute do do fajlova koji ce da se renderuju sadrzi
// konektuje se do monga i vraca template (fajl koji se redneruje)

const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// const EarthquakeModel = mongoose.model("Earthquake");
// const UserModel = mongoose.model("UserModel");
process.env.SECRET_KEY = 'secret';
const User = require('./../models/user.model');
const Earthquake = require('./../models/earthquake.model');
const Comments = require('./../models/comment.model');

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

router.get("/comments", (req, res)=>{
    Comments.find((err, docs)=>{
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

router.post('/comments', (req, res, next)=>{
    let newComment = new Comments({
        text: req.body.text,
        c_time: Date.now(),
    });
    newComment.save((err, user)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({msg: 'Comment has been added sucessfully'});
        }
    });
});


// insertovanje commenta
router.post('/insert_comment', (req, res, next)=>{
    let newComment = new Comments({
        com_id: req.body.com_id,
        user_id: req.body.user_id,
        earthquake_id: req.body.earthquake_id,
        c_time: Date.now(),
    });
    newComment.save((err, user)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({msg: 'Comment has been added sucessfully'});
        }
    });
});




router.post('/register', (req, res, next)=>{
    const today = new Date()
    let newUser = {
       // user_id: req.body.user_id,
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        pwd: req.body.password,
       // created: today
    }
    User.findOne({
        email: req.body.email
    })
    .then(user => {
        if(!user) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                newUser.pwd = hash
                User.create(newUser)
                .then(user => {
                    res.json({status: user.email + 'Registered'})
                })
                .catch(err => {
                    res.send('error: ' + err)
                })
            })
        } else {
            res.json({error: 'User already exists'})
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
   
})

router.post('/login', (req, res) => {
    User.findOne({
        email: req.body.email
    })
    .then(user => {
        if(user) {
            if(bcrypt.compareSync(req.body.password, user.pwd)){
                const payload = {
                    _id: user._id,
                    // user_id: user.user_id,
                    username: user.username,
                   // name: user.name,
                    email: user.email
                }
                let token = jwt.sign(payload, process.env.SECRET_KEY, {
                    expiresIn: 1440
                })
                res.json({token : token})
            }else{
                res.json({error: "User does not exist"})
            } 
        }else {
             res.json({error: "User does not exist"})
         }
    })
    .catch(err => {
        res.send('error' + err)
    })
})


router.get('/profile', (req, res, next)=>{
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    User.findOne({
        _id : decoded._id
    })
    .then(user => {
        if(user){
            res.json(user)
        }
        else{
            res.send("User does not exist")
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
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
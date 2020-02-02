// rute do do fajlova koji ce da se renderuju sadrzi
// konektuje se do monga i vraca template (fajl koji se redneruje)

const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const EarthquakeModel = mongoose.model("Earthquake");

router.get("/list", (req, res)=>{
    EarthquakeModel.find((err, docs)=>{
        if(!err){
            console.log(docs);
            res.render("list", { data : docs });
        }
        else{
            res.send("Error")
        }
    })
  
});

router.get("/lis", (req, res)=>{
    EarthquakeModel.find((err, docs)=>{
        if(!err){
            console.log(docs);
            res.render("list", { data : docs });
        }
        else{
            res.send("Error")
        }
    })
  
});


router.post

module.exports = router;
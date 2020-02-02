const mongoose = require("mongoose"); // nodejs sa mongodb serverom, adapter koji se konektuje

mongoose.connect("mongodb://localhost:27017/SeismoDB",{ useNewUrlParser: true, useUnifiedTopology: true }, (error)=>{
    if(!error){
        console.log("Uspjesno povezivanje sa bazom");
    }
    else {
        console.log("Greska pri konekciji sa bazom");
    }
} );

const Earthquake = require("./earthquake.model"); // startuje kod iz earthquake.model (konekcija)
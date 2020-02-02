const connection = require("./models");
const express = require("express");
const application = express();
const path = require("path");
const expressHandleBars = require("express-handlebars");
const bodyparser = require("body-parser");
const cors = require('cors');
const EarthquakesController = require("./controllers/earthquakes")
const route = require("./route/routes")

application.use(bodyparser.urlencoded({
    extended : true
}));

/* --------------------------------------- */

application.set('views', path.join(__dirname, "/views/")); // __dirname globalna varijabla lokacije aplikacije

application.engine("hbs", expressHandleBars({
    extname: "hbs", 
    defaultLayout: "mainlayout",
    layoutsDir: __dirname + "/views/layouts"
}));

application.set("view engine", "hbs");

application.get("/", (req, res)=>{ // middleware funkcija, http req i res 
    // res.send('<h1> Aplikacija <h1>');
    res.render("index", {}); // u {} podaci koje saljemo u template, podaci iz index.hbs preko mainlayout.hbs (body) se renderuju
});

application.use("/earthquakes", EarthquakesController); // za ovu putanju koristi se ovaj controller, bazna putanja se definise, express

/* --------------------------------------- */


// adding middleware - crossorigin disociating, exchange between localhost:3000 i 4200
application.use(cors());
// bodyparser middleware
application.use(bodyparser.json());

application.use("/api", route);

application.listen("3000", ()=>{
    console.log("Server je uspjesno pokrenut")
});




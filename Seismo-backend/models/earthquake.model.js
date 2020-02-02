const mongoose = require("mongoose");

var EarthquakeSchema = new mongoose.Schema({
    e_Type: String,
    metadata: {
          generated: mongoose.Decimal128,
          url:  String,  
          title: String, 
          ccount: mongoose.Decimal128,   
    },
    features: { 
          type: Object,
          properties: { 
              mag: mongoose.Decimal128,
              municipality: String,
              time: mongoose.Decimal128,
              updated: mongoose.Decimal128,
              tz: Number,
              url: String,
              detail: String,
              felt: Number,
              cdi: Number,
              alert: null,
              status: String,
              tsunami: Number,
              sig: Number,
              ids: String,
              sources: String,
              nst: null,
              dmin: mongoose.Types.Decimal128
          },
          geometry: {
              g_Type: String,
              coordinates: [mongoose.Types.Decimal128]       
          },
          id: String
        }
    });
          

const user = module.exports = mongoose.model("Earthquake", EarthquakeSchema);






   


/*  type: {
        type : String,
        required : "Required"
    },
    metadata: {
        type: Object,
        required: "Required",

          generated: {
            type: Double,
            required: "Required"
          },
          url: {
             type: String,
             required: "Required"
          },
          title: {
            type: String,
            required: "Required"
          },
          ccount: {
              type: Double,
              required: "Required"
          }
        
    },
    features: {
        type: Object,
        required: "Required",

          type: {
             type: String,
             required: "Required"
          } */

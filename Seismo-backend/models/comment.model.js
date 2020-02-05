const mongoose = require("mongoose");

var CommentSchema = new mongoose.Schema({

        text: String,

    
});
          

const Comments = module.exports = mongoose.model("Comments", CommentSchema);

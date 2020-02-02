const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    user_id: String,
    username: String,
    name: String, 
    email: String,
    pwd: String
    
});
          

const User = module.exports = mongoose.model("User", UserSchema);






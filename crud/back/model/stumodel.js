const mongoose = require('mongoose'); 

const stuSchema = new mongoose.Schema({
    name: String, 
    roll: String, 
    city: String, 
    mobile: Number, 
}); 

module.exports = mongoose.model("Student", stuSchema);  


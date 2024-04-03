const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({
    studentName : {
        type: String,
        required: true
    },
    studentNumber : {
        type: String,
        required: true
    },
    course : {
        type: String,
        required: true
    }
},{timestamps:true});

module.exports = mongoose.model("Registration", RegistrationSchema);
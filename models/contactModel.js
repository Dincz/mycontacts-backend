const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name : {
    type : String,
    required : [true,"please enter the name"],
    },
    email : {
        type : String,
        required : [true,"please enter the Email"],
    },
    phoneno : {
        type : Number,
        required : [true,"please enter the Number"],
    }

});
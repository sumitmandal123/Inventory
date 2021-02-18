const mongoose = require('mongoose');

const ErrorLogSchema = new mongoose.Schema({
    Name:String,
    Message:String,
    StackTrace:String,
    ExtraInfo:String,
    CurrentUrl:String,
    ErroCode:{
        type:Number,
        default:500
    },
    createdAt:{
        type:Date,
        default:Date.now
    },

})

module.exports = mongoose.model('errorLog',ErrorLogSchema);
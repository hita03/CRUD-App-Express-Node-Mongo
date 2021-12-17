const mongoose=require('mongoose');

var schema =new mongoose.Schema({
    ID: {
        type: Number,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    
    gender: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        required: true
    },


})

const Userdb = mongoose.model('userdb',schema);
module.exports = Userdb;

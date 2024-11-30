//To include mongoose and use for schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstName : { type : String },
    lastName : { type : String },
    countryCode : { type : String },
    mobileNo : { type : String },
    password : { type : String },
    confirmPassword : { type : String }
})
module.exports=mongoose.model('User',UserSchema);
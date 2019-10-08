const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        minlength:3,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    password:{
        type:String,
        minlength:8,
        required:true
    },
    isCandidate:{
        type:Boolean,
        required:true
    }
})

const User = mongoose.model('User', userSchema);

function validateUser(user){
    const schema = Joi.object().keys({
        name : Joi.string().min(3).required(),
        email : Joi.string().required(),
        password : Joi.string().required(),
        isCandidate : Joi.boolean().required() 
    })

    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
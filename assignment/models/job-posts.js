const mongoose = require('mongoose');
const Joi = require('joi');

const postSchema = new mongoose.Schema({
    jobName:{
        type:String,
        minlength:1,
        required:true
    },
    skill:{
        type:String,
        required:true
   },
    experience:{
        type:String,
        required:true
    },
    recruiterId:{
        type:String,
        required:true
    }
})

const Post = mongoose.model('Post', postSchema);

function validatePost(job){
    const schema = Joi.object().keys({
        jobName : Joi.string().min(1).required(),
        skill : Joi.string().required(),
        experience : Joi.string().required()
    })

    return Joi.validate(job, schema);
}

exports.Post = Post;
exports.validate = validatePost;
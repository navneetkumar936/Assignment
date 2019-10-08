const auth = require('../middlewares/auth');
const express = require('express');
const router = express.Router();
var _ = require('lodash');
const bcrypt = require('bcrypt');
const { Post, validate } = require('../models/job-posts');

// router.get('/', auth, async (req, res) => {
//     const user = await User.findById(req.user._id).select('-password');
//     res.send(user);
// })

router.post('/', auth, async (req, res) => {
    if(req.body){
        if(req.user._isCandidate) return res.status(401).send('Must be a recruiter');

        const { error } = validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        let post = new Post(_.mergeWith(_.pick(req.body, ['jobName', 'skill', 'experience']), { recruiterId : req.user._id })); //lodash library used for getting specific field out of objects
        await post.save();

        return res.send('Job Created Successfully');
    }
})

// router.post('/register', async (req, res) => {
//     if(req.body){
//         const { error } = validate(req.body);
//         if(error) return res.status(400).send(error.details[0].message);

//         let user = await User.findOne({ email : req.body.email });
//         if(user) return res.status(400).send('User already exists');

//         user = new User(_.pick(req.body, ['name', 'email', 'password', 'isCandidate'])); //lodash library used for getting specific field out of objects
//         const salt = await bcrypt.genSalt(10);
//         user.password = await bcrypt.hash(user.password, salt);
//         await user.save();

//         return res.send('Registration Successful');

//     }
// })

module.exports = router;
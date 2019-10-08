const auth = require('../middlewares/auth');
const express = require('express');
const router = express.Router();
var _ = require('lodash');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, validate } = require('../models/users');

function genarateAuthToken(user){
    const token = jwt.sign({_id: user._id, isCandidate:user.isCandidate}, 'jobplatformsecretkey');
    return token;
}

router.get('/', auth, async (req, res) => {
    const user = await User.findById(req.user._id).select('-password');
    res.send(user);
})

router.post('/login', async (req, res) => {
    if(req.body){
        let user = await User.findOne({ email : req.body.email });
        if(!user) return res.status(400).send('User does not exist');

        const passwordVerified = await bcrypt.compare(req.body.password, user.password);
        if(! passwordVerified) return res.status(400).send('Incorrect Password');

        const token = genarateAuthToken(user);
        return res.status(200).send(_.mergeWith(_.pick(user, ['name', 'email', 'isCandidate']), {token : token}));
    }
})

router.post('/register', async (req, res) => {
    if(req.body){
        const { error } = validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        let user = await User.findOne({ email : req.body.email });
        if(user) return res.status(400).send('User already exists');

        user = new User(_.pick(req.body, ['name', 'email', 'password', 'isCandidate'])); //lodash library used for getting specific field out of objects
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();

        return res.send('Registration Successful');

    }
})

module.exports = router;
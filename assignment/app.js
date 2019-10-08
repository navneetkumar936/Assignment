const express = require('express');
const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const app = express();
var users = require('./routes/users');
var job_posts = require('./routes/job-posts');

mongoose.connect('mongodb://localhost/jobplatform',{ useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Connected to DB....'))
    .catch((err) => console.log('Could not connect to DB...'))

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

app.use(express.json());

app.use('/api/users', users);
app.use('/api/post', job_posts);

// app.use(error);

const port = (process.env.port || 3000);

app.listen(port, () => {
    console.log(`Listening port ${port} for jobplatform....`);
})
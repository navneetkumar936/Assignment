const jwt = require('jsonwebtoken');

module.exports = function (req, res, next){
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send('Token not found');

    try{
        const decoded = jwt.verify(token, 'jobplatformsecretkey');
        req.user = decoded;
        next();
    }
    catch(err){
        res.status(400).send('Invalid Token');
    }
}
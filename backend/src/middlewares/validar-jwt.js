
const jwt = require('jsonwebtoken');


const validarJWT = (req, res, next) =>{

    if(!req.headers.authorization) return res.status(401).send('Anuthorizad request');

    const token = req.headers.authorization;
    if(token === 'null') res.status(401).send('Anuthorizad request');

    const payload = jwt.verify(token, 'secretkey');     
    req.userId = payload._id;


    next();
}

module.exports ={
    validarJWT
}
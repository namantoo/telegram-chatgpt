const { request, response } = require('express');
const jwt = require('jsonwebtoken');

// reminder: make this async await 
module.exports = (req, res, next) => {
    // const token = req.headers.authorization
   
    const token = req.headers.authorization
    console.log(token)
    // const verify =  jwt.verify(token, 'mynameuisnandnuewfiurnwifnrenurieriieru');
 
}
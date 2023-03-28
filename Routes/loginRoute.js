const express = require('express');
const router = express.Router();
const axios = require('axios');
require("../db/conn")
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose')
async function getAccessToken() {
    const audience = 'https://dev-abnn7s8xvltjj3ix.us.auth0.com/api/v2/';
    const clientId = 'mun7wQ57fHXm6x728vZVOsfmL0VWTgE7';
    const clientSecret = 'a316BenbRg57z_9XA96t1k1KBA0SPEZ6C5Jujeecg0ccq_9nAJAUsl1p9InrYPXW';
  
    const response = await axios.post('https://dev-abnn7s8xvltjj3ix.us.auth0.com/oauth/token', {
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
      audience: audience,
    });
  
    const accessToken = response.data.access_token;
    console.log(accessToken)
    return accessToken;
  }
  
router.get("/", async (req, res, next) =>{
    try {
        // const accessToken = await getAccessToken();
        const token = "  "
        // console.log(accessToken)
        const options = {
            method: 'GET',
            url: "https://dev-abnn7s8xvltjj3ix.us.auth0.com/api/v2/users",
            headers: { authorization: `Bearer ` }
          };
          axios(options)
            .then((response) => {
              res.send(response.data);
            })
            .catch((error) => {
              console.error(error);
              res.status(500).send('Error making API request');
            });
      } catch (error) {
        console.error(error);
        // res.status(error.response.status).send(error.response.statusText);
      }
})
 
router.post("/", async (req, res)=>{
    try {
        const { email, password } = req.body;   
        console.log(email, password)
        if(email === "pd@c3links.org" && password === "pd@12345"){
                const token =  jwt.sign({ email: email, password: password }, "thisisaproductionbuildapiforourstartup", {
                expiresIn: "24h" 
                });
                console.log(token)
                const userVer = jwt.verify(token, "thisisaproductionbuildapiforourstartup")
                console.log(userVer)
                res.send({admin: {access: `${token}`}})         
        }else{
            res.send({message: "email or password incorrect"})
        }
    }
    catch(e){
        res.send(e)
    }
 });



module.exports = router;
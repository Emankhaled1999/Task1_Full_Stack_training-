const express = require('express');
const axios = require('axios').default;
const yahoo = express.Router();

yahoo.get('/jokes', (req, res) =>{
    
    var options = {
      method: 'GET',
      url: 'https://dad-jokes.p.rapidapi.com/random/joke/png',
      headers: {
        'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
        'x-rapidapi-key': 'af57281ec2msh286c88104d7a71ap12663bjsnfea8d1c680bd'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      res.render('jokes', {title: 'Dad Jokes', jokes: response.data});
    }).catch(function (error) {
      console.error(error);
    });
});

module.exports=yahoo; 


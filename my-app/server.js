'use strict'

//Body parser for req-body
var bodyParser = require('body-parser');

// Express routing
const express = require('express');
var request = require('request');
var http = require('http');
var app = express();
var apikey = "AIzaSyAKDu8ti6WtofsN6S5oH8GByrZL0zasCVs";

app.use(bodyParser({
  limit: '10mb'
}));
app.use(bodyParser.json());



const server = app.listen(9001, () => {
  console.log(`Server running at port PORT ${server.address().port}`);
});


app.get('/', (req, res) => {
  res.send("Landing Page");
});



app.post('/submitPrescription', function (req, res) { //req from angular front end
  //console.log(req.body.prescriptionImg);
  //getGoogleVisionInfo(JSON.stringify(req.body.prescriptionImg));
    var img = req.body.prescriptionImg;
    console.log('https://vision.googleapis.com/v1/images:annotate?key=' + apikey);
    var options = { method: 'POST',
    url: 'https://vision.googleapis.com/v1/images:annotate',
    qs: { key: 'AIzaSyAKDu8ti6WtofsN6S5oH8GByrZL0zasCVs' },
    body: '{  "requests": [    {      "image": {        "content": "'+ img.toString() +'"     },      "features": [        {          "type": "TEXT_DETECTION"        }      ]    }  ]}' };
  
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
    
        console.log((JSON.parse(body).responses[0])['textAnnotations'][0]['description']);
        res.send((JSON.parse(body).responses[0])['textAnnotations'][0]['description']);
    });
  
    

});

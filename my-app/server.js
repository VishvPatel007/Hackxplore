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



// app.post('/submitPrescription', function (req, res) { //req from angular front end
//   //console.log(req.body.prescriptionImg);
//   //getGoogleVisionInfo(JSON.stringify(req.body.prescriptionImg));
//     console.log('https://vision.googleapis.com/v1/images:annotate?key=' + apikey);
//     var options = { method: 'POST',
//     url: 'https://vision.googleapis.com/v1/images:annotate',
//     qs: { key: 'AIzaSyAKDu8ti6WtofsN6S5oH8GByrZL0zasCVs' },
//     body: '{  "requests": [    {      "image": {        "content": "'+ img.toString() +'"     },      "features": [        {          "type": "TEXT_DETECTION"        }      ]    }  ]}' };
  
//     request(options, function (error, response, body) {
//         if (error) throw new Error(error);
    
//         console.log((JSON.parse(body).responses[0])['textAnnotations'][0]['description']);
//         res.send(JSON.stringify((JSON.parse(body).responses[0])['textAnnotations'][0]['description']));
//     });
  

// });

var samplePres = "PRESCRIPTION\nDoctor Name: Dr. Patel\nDoctor Address: 123 Make Money Street\nClient №me: John Doe\nClient Address: 13 Lose Money Street\nClient Age: 23\nClient Sex: Male\nDate Prescribed: February 15h 2019\nDrug Name: Amphełamins\nDrug Amount: 500mg\nRefills: None\n";
// parsePrescription()
// function parsePrescription(p){
//   var array = samplePres.split("\n");
//   var newarr = array.split(":");
//   console.log(array);
//   console.log(newarr);

// }



var result = {};
samplePres.split('\n').forEach(function(x){
    var arr = x.split(': ');
    arr[1] && (result[arr[0]] = arr[1]);
});
console.log(result);
var express = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser')
var app = express();
var db = mongojs('contactlist',['contactlist']);
var port = 80;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/contactlist',function(req,res){
    console.log('I receoved a GET request');
    db.contactlist.find(function(err,docs){
        console.log(docs);
        res.json(docs);
    });
});

app.post('/contactlist',function(req,res){
    console.log(req.body);
});


app.get('/jay',function(req,res){
    res.send(JSON.stringify('Hey Bless'));
});


app.listen(port);
console.log('server is running on '+port);
var express = require('express');
var app = express();

var mongojs = require('mongojs');
var db = mongojs('contactlist',['contactlist']);

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var port = 80;

app.use(express.static(__dirname + '/public'));

app.get('/contactlist',function(req,res){
    db.contactlist.find(function(err,docs){
        //console.log(docs);
        res.json(docs);
    });
});

app.post('/contactlist',function(req,res){
    db.contactlist.insert(req.body,function(err,doc){
        res.json(doc);
    })
});

app.delete('/contactlist/:id',function(req,res){
    db.contactlist.remove({_id: mongojs.ObjectID(req.params.id)},function(err,doc){
        res.json(doc);
    })
});

app.get('/contactlist/:id',function(req,res){
    db.contactlist.findOne({_id: mongojs.ObjectID(req.params.id)},function(err,doc){
        res.json(doc);
    })
});


app.put('/contactlist/:id',function(req,res){
    console.log(req.body.name);
    db.contactlist.findAndModify({
        query: {_id: mongojs.ObjectID(req.params.id)},
        update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
        new: true},function(err,doc){
       res.json(doc);
    });
});


app.get('/jay',function(req,res){
    res.send(JSON.stringify('Hey Bless'));
});


app.listen(port);
console.log('server is running on '+port);
var express = require('express');
var app = express();
var port = 80;

app.use(express.static(__dirname + '/public'));

app.get('/jay',function(req,res){
    res.send(JSON.stringify('Hey Bless'));
});


app.listen(port);
console.log('server is running on '+port);
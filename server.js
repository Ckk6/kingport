var express = require('express');
var bodyParser = require('body-parser');

var app = express();


//connect to static folders
app.use(express.static('./public/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

//require collections



var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('connected to', port);
});

//homepage or root (html)
app.get('/', function(req,res){
	res.send(index.html);
});
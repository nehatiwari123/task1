var express = require('express');
var fetch=require('node-fetch');
var app = express();
var path = require("path");
const bodyParser = require('body-parser');
var cookieParser=require('cookie-parser');

//1
app.get('/', (req, res) => res.send('Hello World - Neha'))

//2
var d = "<ul>";
app.use(cookieParser());
var http = require('http');
function countposts(usera){
    var count=0;
    fetch('http://jsonplaceholder.typicode.com/posts?userId='+usera.id)
    .then(function(response){
       return response.json();
    })
    .then(function(json){
    	     count = json.length;
    	     d +="<li>"+usera.name+" has written "+JSON.stringify(count)+" posts</li>";
        return 1;
       
    });
}

app.get('/authors',function(req,res){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        json.forEach(function(user){
             countposts(user);
        });
         res.send(d);
         d="<ul>";
       console.log("done");
       
    });
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//3
app.use(cookieParser());

app.get('/setcookie', function(req, res){
   var check=req.headers.cookie
if(check === undefined)
{
   res.cookie('name', 'Neha'); 
   res.cookie('age', '20').send('cookie set'); 
}

else
{
   res.send('Cookie already exists');
}
});

//4
app.get('/getcookies', function(req, res){
	res.send("name = " + req.cookies.name + " and age = " + req.cookies.age);
});

//5
app.get('/robots.txt',function(req, res){
 res.redirect('http://httpbin.org/deny');
});

//6
app.get('/image',function(req,res){
 res.sendFile(path.join(__dirname+'/image/expressJS.png'));
});

//7
app.get('/input',function(req,res){
 res.sendFile(path.join(__dirname+'/view/textbox.html'));
});

app.use(bodyParser.urlencoded({ extended: true }));
app.post('/result', function (req, res) {
    var name=req.body.name_field;
console.log("User name = " + name);

});

app.listen(8080, () => console.log('App listening on port 8080!'))
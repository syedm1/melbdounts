var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();
var fs 			   = 		 require("fs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/views'));

app.get('/',function(req,res){
  res.sendFile("index.html");
});
app.post('/saveData',function(req,res){
  var user_name=req.body.emailID;
  var password=req.body.comment;
  console.log("EmailID = "+user_name+", Comment is "+password);
  f1 = '/email.txt'
  f2 = '/comment.txt' 
  Data1  = '\n Email ID : '+ user_name 
  Data2 = '\n comment : '+ password
		 fs.appendFileSync(f1,Data1, 'utf8');
		 fs.appendFile(f2,Data2, function(err){
			if(err){console.log(err)}
		});
  fs.appendFile('comments.txt', '\n' + password)
  res.send('Thank you '+ user_name+'is added.');
});
app.listen(3000,function(){
  console.log("Started on PORT 3000");
})
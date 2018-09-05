var mysql = require('mysql');
var Joi =require('joi');
const express = require('express');
const app = express();
app.use(express.json());

const users = {
		userid : '',
		username : '',
		gender : ''
	}

app.get('/api/users/:id',(req,res) => {
	const userid = req.params.id;
	if (!userid) res.send(res.status(404).send('The course with the given ID was unavailable'));
	res.send(userid);
	return;

});

app.post('/api/users',(req,res) => {
	const form = {
		name : Joi.string().min(3).required()
	};

	const result = Joi.validate(req.body,form);

	if (result.error) {
		res.status(400).send(result.error.details[0].message);
		return;
	}
	const user = {
		id : users.length + 1,
		name : req.body.name
	}
});

const port = process.env.PORT || 3000 ;
app.listen(port,() => console.log(`Listening on port ${port}....`));

//connection with mysql

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  port 	   : '3306',
  user     : 'melvin',
  password : ';lkj'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

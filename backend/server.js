const port = 4000;
const mysql = require('mysql');
const express = require('express');
const app = express();
const cors = require('cors');

//var connection = mysql.createConnection({
var connection = mysql.createPool({
	connectionLimit: 20,
    host: '',
    user: 'customer',
    password: '',
    database: "storeDB"
});

// CORS
app.use(cors());
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

// parse application
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(port, () => {
    console.log("App Listening at Port " + port)
});

app.get('/loginattempt', function(req, res) {
    connection.query('SELECT username, pw from users WHERE username = ? AND pw = ?', [req.query.user, req.query.pw], function (error, data) {
		if (error) throw error;
		res.json(data);
	});
});

app.get('/allproducts', function(req, res) {
	connection.query('SELECT * from products', function (error, data) {	
		if (error) throw error;
		res.json(data);
	});
});

app.get('/view_product/:id', function(req, res) {
	connection.query('SELECT * from products WHERE productID = ?', [req.params.id], function (error, data) { 
		if (error) throw error;
		res.json(data);
	});
});
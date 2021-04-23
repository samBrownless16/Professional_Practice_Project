const port = 4000;
const mysql = require('mysql');
const express = require('express');
const app = express();
const cors = require('cors');

var connection = mysql.createPool({
	connectionLimit: 20,
	host:'35.222.142.119',
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
    connection.query('SELECT firstName from users WHERE email = ? AND pw = ?', [req.query.user, req.query.pw], function (error, data) {
		if (error) throw error;
		res.json(data);
	});
});

app.post('/signup', function(req, res) {
	connection.query('INSERT INTO users (email, firstName, surname, pw) VALUES (?, ?, ?, ?)', 
	[req.body.email, req.body.firstName, req.body.surname, req.body.pw], function (error, data) {
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

app.get('/product_search/:search', function(req, res) {
	var search = '%' + req.params.search + '%';
	connection.query('SELECT * FROM products WHERE productName LIKE ? OR productDescription LIKE ?', [search, search], function (error, data) {	
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
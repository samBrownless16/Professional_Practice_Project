const port = 4000;
const mysql = require('mysql');
const express = require('express');
const app = express();

var connection = mysql.createConnection({
    host: '',
    user: 'customer',
    password: '',
    database: "storeDB"
});

// parse application
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(port, () => {
    console.log("App Listening at Port " + port)
});

app.get('/', function(req, res) {
	connection.query('SELECT * from Users', function (error, data) {
		if (error) throw error;
		res.json(data);
	});
});
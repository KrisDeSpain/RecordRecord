require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USERNAME,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DB
});

connection.connect(function(error){
	if(error) throw error;
	console.log("Connected!");
	connection.query("CREATE DATABASE IF NOT EXISTS RR_DB", function (error, result){
		if (error) throw error;
		console.log("Database Created!");
	});
});

module.exports = connection;
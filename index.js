const path = require('path');
const express = require('express');
const app = express();

const userRoutes = require("./Server/Routes/user");

app.use(express.json());

app.use(express.static(path.join(__dirname + '/Public')));
app.get('/', (req, res) => 
	res.sendFile(path.join(__dirname, '/Public/Pages/index.html')));

//CORS middleware
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
	next();
});

app.use("/users", userRoutes);
	

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}!`));
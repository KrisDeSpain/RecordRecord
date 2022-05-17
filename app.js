require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

const pageRoute = require("./pageRoute")
const userRoute = require("./Server/Routes/userRoute");

app.use(express.json());
app.use(express.static(path.join(__dirname + '/Public')));

//CORS middleware
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
	next();
});

app.use("/", pageRoute);
app.use("/user", userRoute);

app.get('*', (req, res) => {	
	res.send("Invalid URL");
});


const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));
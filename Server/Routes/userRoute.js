const express = require('express');
const UserModel = require('../Models/userModel');
const router = express.Router();


router
	.get('/', async (req,res) => {
		try {
			const users = await UserModel.getUsers();
			res.send(users);
		} catch(error){
			res.status(401).send({message: error.message});
		}
	})

	.post('/login', async (req, res) => {
		try {
			const user = await UserModel.loginUser(req.body.username, req.body.password);
			res.send( { ...user, password: undefined} );
		} catch(error) {
			res.status(401).send({message: error.message});
		}
	})

	.post('/register', async (req, res) => {
		try {
			console.log("userRoute Register");
			const user = await UserModel.registerUser(req.body.username, req.body.password);
			console.log(user)
			res.send({user, password: undefined});
		} catch(error) {
			res.status(401).send({message: error.message});
		}
	})

	.delete('/delete', async (req, res) => {
		try {
			await UserModel.deleteUser(req.body.userID);
			res.send({success: "User Profile Deleted"});
		} catch(error) {
			res.status(401).send({message: error.message})
		}
	})

module.exports = router;
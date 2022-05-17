const dbConnect = require("./db_connect");

async function createTable() {
	let sql = `CREATE TABLE IF NOT EXISTS Users (
		userID INT NOT NULL AUTO_INCREMENT,
		username VARCHAR(255) NOT NULL UNIQUE,
		password VARCHAR(255),
		email VARCHAR(255),
		dateCreated DATE,
		CONSTRAINT user_PK PRIMARY KEY(userID)
	)`;
	await dbConnect.query(sql);
}
createTable();

let getUsers = async () => {
	const sql = `SELECT * FROM Users`;
	return await dbConnect.query(sql);
}

async function userExists(username){
	const sql = `SELECT * FROM Users WHERE username = "${username}"`;
	return await dbConnect.query(sql);
}

async function getUser(user) {
	let sql;
	if(user.userID) {
		sql = `SELECT * FROM Users WHERE userID = "${user.userID}"`;
	}
	else {
		sql = `SELECT * FROM Users WHERE username = "${user.username}"`;
	}
	return await dbConnect.query(sql);
}

async function loginUser(username, password) {
	const user = await userExists(username);
	if(!user[0]) throw Error('User Not Found');
	if(user[0].password !== password) throw Error('Password Invalid');

	return user[0];
}

async function registerUser(username, password) {
	const regUser = await userExists(username);
	if(regUser.length>0) {
		throw Error('Username Already In Use');
	}

	const sql = `INSERT INTO Users (username, password) 
	VALUES ("${username}", "${password}")`;
	const insert = await dbConnect.query(sql);
	const newUser = await getUser(username);
	return newUser[0];
}

async function deleteUser(userID) {
	const sql = `DELETE * FROM Users WHERE userID = "${userID}"`;

	await dbConnect.query(sql);
}


module.exports = { getUser, getUsers, loginUser, registerUser, deleteUser, createTable };
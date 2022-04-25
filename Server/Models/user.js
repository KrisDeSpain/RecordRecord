const users = [
	{
		userID: 12345,
		email: "test1@test.com",
		username: "testUser1",
		password: "admin"
	}
];

let getUsers = () => users;

function register(user) {
	const u = userExists(user.username);
	if(u.length>0) throw Error('Username Already In Use');
	const newUser = {
		userID: users[users.length-1].userID+1,
		email: user.email,
		username: user.username,
		password: user.password
	}
	users.push(newUser);

	return newUser;
}

function userExists(username){
	return users.filter((u) => u.username === username);
}

function login(username, password) {
	const user = users.filter((u) => u.username === username);
	if(!user[0]) throw Error('User Not Found');
	if(user[0].password !== password) throw Error('Password Incorrect');

	return user[0];
}

module.exports = { getUsers, login, register };
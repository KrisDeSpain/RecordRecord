class User_Class{
	constructor(username, email){
		this.username = username;
		this.email = email;
	}
	setID(){
		this.ID = (Math.random()*9000)+1000;
	}
	getID(){
		return this.ID;
	}
	
	setUsername(username){
		this.username = username;
	}
	getUsername(){
		return this.username;
	}

	setEmail(email){
		this.email = email;
	}
	getEmail(){
		return this.email;
	}
}


document.getElementById("btn-register").addEventListener('click', submit_register);

function submit_register(){
	let username = document.getElementById("username_Reg").value;
	let email = document.getElementById("email_Reg").value;

	var new_user = new User_Class(username,email);

	console.log('User Created');
	console.log(new_user);
}
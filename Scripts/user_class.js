class User{
	default_construct(){
		this.ID = null;
		this.username = null;
		this.email = null;
	}
	constructor(username, email){
		this.ID = setID();
		this.username = setUsername(username);
		this.email = setEmail(email);
	}

	setID(){
		this.ID = (Math.random()*9000)+1000
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
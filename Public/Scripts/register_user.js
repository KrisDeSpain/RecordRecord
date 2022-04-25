document.getElementById("btn-register").addEventListener('click', submit_register);

function submit_register(){
	const username = document.getElementById("username_Reg").value;
	const email = document.getElementById("email_Reg").value;
	const password = document.getElementById("pswd_reg").value;

	postData('http://localhost:3000/users/register', 
		{email: email, username: username, password:password})
	.then((data) => {
		if(!data.message) {
			setCurrentUser(data);
			window.location.href = "Pages/index.html";
		}
	})
	.catch((error) => {
		const errorText = error.message;
		document.querySelector("#registerForm p.error").innerHTML = errorText;
		document.getElementById("pswd_reg").value = "";
		console.log(`Error! ${errorText}`)
	});
}

function setCurrentUser(user){
	localStorage.setItem('user', JSON.stringify(user));
}

function getCurrentUser() {
	return JSON.parse(localStorage.getItem('user'));
}

function removeCurrentUser(){
	localStorage.removeItem('user');
}
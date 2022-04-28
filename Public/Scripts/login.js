let login = document.getElementById("login");
let user = document.getElementById("username_log");
let pass = document.getElementById("pswd");

login.addEventListener("click", loginFunc);

function loginFunc(){
	const username = user.value;
	const password = pass.value;

	postData('http:/localhost:3000/users/login', 
		{username: username, password: password})
	.then((data) => {
		if(!data.message) {
			window.location.href = "./Pages/index.html";
		}
	})
	.catch((error) => {
		const errorText = error.message;
		console.log(`Error ${errorText}`)
	});
}
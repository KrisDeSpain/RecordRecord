import { fetchData, getCurrentUser, setCurrentUser, removeCurrentUser } from "./main.js";	

// Login Register Toggle Function
var logState = true;
var regState = false;

const loginForm = document.getElementById("loginForm");
const logBtn = document.getElementById("logBtn");
const registerForm = document.getElementById("registerForm");
const regBtn = document.getElementById("regBtn");


logBtn.addEventListener('click', log_Toggle);
loginForm.addEventListener("submit", login);

regBtn.addEventListener('click', reg_Toggle);
registerForm.addEventListener("submit", regUser);

function log_Toggle(){
	if(!logState){
		logState = true;
		regState = false;
		hide_Toggle();
		regBtn.style.backgroundColor ="Var(--Down-Color)";
		logBtn.style.backgroundColor = "Var(--Up-Color)";
	}
}
function reg_Toggle(){
	if(!regState){
		logState = false;
		regState = true;
		hide_Toggle();
		regBtn.style.backgroundColor ="Var(--Up-Color)";
		logBtn.style.backgroundColor = "Var(--Down-Color)";
	}
}
function hide_Toggle(){
	loginForm.classList.toggle('hide');
	registerForm.classList.toggle('hide');
}

// Login User
function login(event) {
	event.preventDefault();

	var username = document.getElementById("username_log").value;
	var password = document.getElementById("pswd").value;

	fetchData("/login", {username: username, password: password}, "POST")
	.then((data) => {
		if(!data.message) {
			setCurrentUser(data);
			window.location.href = "Home";
		}
	})
	.catch((error) => {
		const errorTxt = error.message;
		document.getElementById("log_error").innerHTML = errorTxt;
		document.getElementById("pswd").value = "";
		console.log(`Error ${errorTxt}`);
	});
}

// Register User
registerForm.addEventListener("submit", regUser);

function regUser(e) {
	e.preventDefault();

	var reg_username = document.getElementById("username_reg").value;
	var reg_password = document.getElementById("pswd_reg").value;
	var passwordCheck = document.getElementById("pswd_redo").value;

	if (reg_password == passwordCheck){
		fetchData("/register", 
		{username: reg_username, password: reg_password}, "POST")
		.then((data) => {
			if(!data.message) {
				setCurrentUser(data);
				window.location.href = "Home";
			}
		})
		.catch((error) => {
			const errorTxt = error.message;
			document.getElementById("reg_error").innerHTML = errorTxt;
			document.getElementById("pswd_reg").value = "";
			document.getElementById("pswd_redo").value = "";
			console.log(`Error ${errorTxt}`);
		});
	} else {
		document.getElementById("reg_error").innerHTML = "Passwords Do Not Match!";
		document.getElementById("pswd_reg").value = "";
		document.getElementById("pswd_redo").value = "";
	}
}
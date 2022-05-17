// // Login Register Toggle Function
// let logState = true;
// let regState = false;
// let loginForm = document.getElementById("loginForm");
// let logBtn = document.getElementById("logBtn");
// let registerForm = document.getElementById("registerForm");
// let regBtn = document.getElementById("regBtn");
// logBtn.addEventListener('click', log_Toggle);
// regBtn.addEventListener('click', reg_Toggle);

// function log_Toggle(){
// 	if(!logState){
// 		logState = true;
// 		regState = false;
// 		hide_Toggle();
// 		regBtn.style.backgroundColor ="Var(--Down-Color)";
// 		logBtn.style.backgroundColor = "Var(--Up-Color)";
// 	}
// }
// function reg_Toggle(){
// 	if(!regState){
// 		logState = false;
// 		regState = true;
// 		hide_Toggle();
// 		regBtn.style.backgroundColor ="Var(--Up-Color)";
// 		logBtn.style.backgroundColor = "Var(--Down-Color)";
// 	}
// }
// function hide_Toggle(){
// 	loginForm.classList.toggle('hide');
// 	registerForm.classList.toggle('hide');
// }
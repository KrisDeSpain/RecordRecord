export async function fetchData(url='', data = {}, methodType) {
    const response = await fetch(`http://localhost${url}`, {
        method: methodType,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            "Content-Type": "application/json"
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    if(response.ok) {
        return await response.json();
    }
    else {
        throw await response.json();
    }
}

// Logout Button 
export const logoutBtn = document.getElementById('logoutBtn');
if(logoutBtn) logoutBtn.addEventListener('click', logout);

// Nav Functionality
const navBar = document.getElementById("leftNav");
if(getCurrentUser()) {
    logoutBtn.classList.remove('hide');
    navBar.innerHTML = `
        <a href="Home">Home</a>
        <a href="Collection">Collection</a>
        <a href="Wishlist">Wishlist</a>
        <a href="Profile">Profile</a>
    `;
} else {
    logoutBtn.classList.add('hide');
    navBar.innerHTML = `
    <a href="Home">Home</a>
    <a href="Login">Login</a>
    `;
}

document.getElementById("navBtn").addEventListener("click", toggleNav)

function toggleNav(){
	let navStatus = document.getElementById("leftNav").style.width;
	if (navStatus == "125px"){
		return closeNav();
	} else {
		return openNav();
	}
}

function openNav(){
	document.getElementById("leftNav").style.width = "125px";
}

function closeNav(){
	document.getElementById("leftNav").style.width = "0";
}

// Server Function -- User
export function setCurrentUser(user) {
	localStorage.setItem('user', JSON.stringify(user));
}

export function removeCurrentUser() {
	localStorage.removeItem('user');
}

export function getCurrentUser() {
	return JSON.parse(localStorage.getItem('user'));
}

export function logout(){
	removeCurrentUser();
    window.location.href = "/";
}



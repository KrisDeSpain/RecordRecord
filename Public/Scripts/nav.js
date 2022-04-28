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

document.getElementsByClassName("navBtn").addEventListener("click",navigate());

function navigate(page){

}
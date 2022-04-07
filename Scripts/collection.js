let album = document.getElementById("album-container");

album.addEventListener('click', album_toggle);


let album_front = document.getElementById("album-front");
let album_back = document.getElementById("album-back");



function album_toggle(){
	album_front.classList.toggle('hide');
	album_back.classList.toggle('hide');
}
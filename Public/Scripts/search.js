const api_key = "&api_key=164ef3a75ffc926e28f67551c528c2d8&format=json"
const base_url = "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist="
const searchBox = document.getElementById("index-search");

if(searchBox){
	searchBox.addEventListener('keypress', function (e) {
		if(e.key === "Enter"){
			let searchValue = document.getElementById("index-search").value;
			querySearch(searchValue);
		}
	});
}
async function querySearch(searchValue){
	console.log(searchValue);
	let search_URL = base_url+searchValue+api_key;
	fetchAPIData(search_URL)
	.then((data) => {
		if(!data.message) {
			outputSearch(data);
		}
	})
	.catch((error) => {
		console.log(error.message);
	});
}

async function fetchAPIData(url){
    const response = await fetch(url)
    if(response.ok) {
        return await response.json();
    }
    else {
        throw await response.json();
    }
}

const searchList = document.getElementById("albumList");
function outputSearch (data){
	document.getElementById('search-container').classList.remove('hide');
	const searchList = document.getElementById("albumList");
	let albumList = data.topalbums.album;
	console.log(albumList);
	let max = 10, count = 0;
	albumList.forEach(album => {
		if(count<max){
			var albumName = album.name;
			searchList.innerHTML += `<li class="album_Output">
			<div class="album-name">${albumName}</div>
			</li>`
		}
		count++
	});
}


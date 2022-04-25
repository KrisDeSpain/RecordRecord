const searchBox = document.getElementById("index-search");

if(searchBox){
	searchBox.addEventListener('keypress', function (e) {
		if(e.key === "Enter"){
			let searchValue = document.getElementById("index-search").value;
			querySearch(searchValue);
		}
	});
}

function querySearch(searchValue){
	document.location.href = "search.html?"+searchValue;
	let queryString = location.search.substring(1);
	console.log(queryString);
	document.getElementById("testValue").innerHTML = queryString;
}
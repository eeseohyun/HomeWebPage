function onGeoPass(position) {
	const lat = position.coords.latitude;
	const lng = position.coords.longitude;
	console.log(lat, lng);
}

function onGeoError() {
	alert("Sorry.😢 No Weather For You");
}

navigator.geolocation.getCurrentPosition(onGeoPass, onGeoError);

const clock = document.getElementById("clock");

function getClock() {
	const date = new Date();
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	clock.innerText = `${hours}:${minutes}`;
}

getClock(); //00:00 대신 바로 보여줌
setInterval(getClock, 1000);

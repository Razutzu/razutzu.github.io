const d = document.getElementById("days");
const h = document.getElementById("hrs");
const m = document.getElementById("mins");
const s = document.getElementById("secs");
const ms = document.getElementById("ms");

const relDate = new Date("May 13, 2025, 21:35:00 UTC+2").getTime();

function displayTime(showTime) {
	let time = relDate - showTime;

	const days = Math.floor(time / 86400000);
	time -= days * 86400000;
	const hours = Math.floor(time / 3600000);
	time -= hours * 3600000;
	const minutes = Math.floor(time / 60000);
	time -= minutes * 60000;
	const seconds = Math.floor(time / 1000);
	time -= seconds * 1000;
	const mseconds = Math.floor(time / 10);

	d.innerHTML = days > 9 ? days : `0${days}`;
	h.innerHTML = hours > 9 ? hours : `0${hours}`;
	m.innerHTML = minutes > 9 ? minutes : `0${minutes}`;
	s.innerHTML = seconds > 9 ? seconds : `0${seconds}`;
	ms.innerHTML = mseconds > 9 ? mseconds : `0${mseconds}`;
}

displayTime(Date.now());
setInterval(() => displayTime(Date.now()), 10);

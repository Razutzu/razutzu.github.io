const d = document.getElementById("days").children.item(0);
const h = document.getElementById("hrs").children.item(0);
const m = document.getElementById("mins").children.item(0);
const s = document.getElementById("secs").children.item(0);
const progress = document.getElementById("progressBar");

const continer = document.getElementById("container");
const progressContainer = document.getElementById("progress");

const relDate = new Date("November 13, 2023, 21:35:00 UTC+3	").getTime();
const start = new Date("May 13, 2024, 21:35:00 UTC+3").getTime();
const reach = new Date("June 13, 2024, 21:35:00 UTC+3").getTime();

progress.max = reach - start;

function displayTime(showTime) {
	let time = showTime - relDate;

	progress.value = showTime - start;

	const days = Math.floor(time / 86400000);
	time -= days * 86400000;
	const hours = Math.floor(time / 3600000);
	time -= hours * 3600000;
	const minutes = Math.floor(time / 60000);
	time -= minutes * 60000;
	const seconds = Math.floor(time / 1000);

	d.innerHTML = days > 9 ? days : `0${days}`;
	h.innerHTML = hours > 9 ? hours : `0${hours}`;
	m.innerHTML = minutes > 9 ? minutes : `0${minutes}`;
	s.innerHTML = seconds > 9 ? seconds : `0${seconds}`;
}

displayTime(Date.now());
setInterval(() => displayTime(Date.now()), 1000);

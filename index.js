const d = document.getElementById("days").children.item(0);
const h = document.getElementById("hrs").children.item(0);
const m = document.getElementById("mins").children.item(0);
const s = document.getElementById("secs").children.item(0);
const progress = document.getElementById("progressBar");

const february = new Date("March 13, 2024, 21:35:00 UTC+2");

function showTime(startDate) {
	let time = Date.now() - startDate;
	progress.value = Date.now() - february.getTime();

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

(function () {
	const startDate = new Date("November 13, 2023, 21:35:00 UTC+2").getTime();

	showTime(startDate);

	setInterval(() => {
		showTime(startDate);
	}, 1000);
})();

let h = document.getElementById("hrsb");
let m = document.getElementById("minsb");
let s = document.getElementById("secsb");
let ms = document.getElementById("msb");

const beforeTimerContainer = document.getElementById("before-timer-container");
const timerContainer = document.getElementById("timer-container");
const imageContainer = document.getElementById("photo-frame");
const messageContainer = document.getElementById("message-container");

const date = imageContainer.children.item(1);
const place = imageContainer.children.item(2);

const love = messageContainer.children.item(0);
const message = messageContainer.children.item(1);

const dateToWrite = "12 noiembrie 2023";
const placeToWrite = "Brasov";

const loveToWrite = "<3 Te iubesc pentru farmecul pe care l-ai avut asupra mea de la inceput <3";
const messageToWrite =
	"Probabil e ciudat ceea ce vezi. Nu înțelegi exact unde si la ce sa te uiți. Tot ce îți cer este sa te întorci aici, zi de zi, cu un minut înainte de 21:35. Ca si oameni, tindem sa fim foarte concentrați pe prezent si pe viitor, dar câteodată e plăcut sa te oprești si sa te uiți la drumul parcurs. Un an si șase luni e mult. Am trecut împreună prin atâtea schimbări si stări. Nu aș ști să-ți spun exact ce simțeam acum un an, șase luni si o zi, dar aș crede ca eram confuz si speriat, dar in același timp fericit, cu o speranța ca vom fi împreună. Happy 1.5 months, iubire!";

let relDate = new Date("May 13, 2025, 18:46:00 UTC+3").getTime();

const sleep = (milliseconds) => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

let reached = 0;

async function displayTime(showTime) {
	let time = relDate - showTime;

	if (time <= 0 && time > -15000) relDate = new Date("May 14, 2025, 21:35:00 UTC+3").getTime();

	const hours = Math.floor(time / 3600000);
	time -= hours * 3600000;
	const minutes = Math.floor(time / 60000);
	time -= minutes * 60000;
	const seconds = Math.floor(time / 1000);
	time -= seconds * 1000;
	const mseconds = Math.floor(time / 10);

	h.innerHTML = hours > 9 ? hours : `0${hours}`;
	m.innerHTML = minutes > 9 ? minutes : `0${minutes}`;
	s.innerHTML = seconds > 9 ? seconds : `0${seconds}`;
	ms.innerHTML = mseconds > 9 ? mseconds : `0${mseconds}`;
}

async function changeImage() {
	if (reached >= 2) return;
	else if (reached == 1) {
		if (Date.now() >= relDate) {
			reached = 2;
			imageContainer.classList.remove("trans");
			imageContainer.classList.add("optrans");
			await sleep(1000);

			for (const char of dateToWrite) {
				date.innerHTML += char;
				await sleep(50);
			}

			await sleep(500);

			for (const char of placeToWrite) {
				place.innerHTML += char;
				await sleep(50);
			}

			await sleep(2000);

			for (const char of messageToWrite) {
				message.innerHTML += char;
				await sleep(10);
			}

			await sleep(25000);

			for (const char of loveToWrite) {
				love.innerHTML += char;
				await sleep(75);
			}
		}
	} else if (Date.now() >= relDate + 15000) {
		reached = 3;
		beforeTimerContainer.style = "opacity: 0;";
		timerContainer.classList.remove("trans");

		h = document.getElementById("hrs");
		m = document.getElementById("mins");
		s = document.getElementById("secs");
		ms = document.getElementById("ms");

		h.classList.remove("trans");
		m.classList.remove("trans");
		s.classList.remove("trans");
		ms.classList.remove("trans");

		imageContainer.classList.remove("trans");

		date.innerHTML = dateToWrite;
		place.innerHTML = placeToWrite;

		love.innerHTML = loveToWrite;
		message.innerHTML = messageToWrite;

		relDate = new Date("May 14, 2025, 21:35:00 UTC+3").getTime();
	} else if (Date.now() + 10000 >= relDate) {
		reached = 1;
		beforeTimerContainer.classList.add("trans");
		await sleep(1000);
		timerContainer.classList.remove("trans");
		timerContainer.classList.add("optrans");

		h = document.getElementById("hrs");
		m = document.getElementById("mins");
		s = document.getElementById("secs");
		ms = document.getElementById("ms");

		await sleep("1000");
		h.classList.remove("trans");
		h.classList.add("optrans");
		await sleep("250");
		m.classList.remove("trans");
		m.classList.add("optrans");
		await sleep("250");
		s.classList.remove("trans");
		s.classList.add("optrans");
		await sleep("250");
		ms.classList.remove("trans");
		ms.classList.add("optrans");
	}
}

displayTime(Date.now());
setInterval(async () => {
	changeImage();
	displayTime(Date.now());
});

let h = document.getElementById("hrs");
let m = document.getElementById("mins");
let s = document.getElementById("secs");
let ms = document.getElementById("ms");

const data = [
	{
		day: 13,
		classDate: new Date("May 14, 2025, 21:35:00 UTC+3"),
		photo: "0.JPG",
		date: "12 noimebrie 2023",
		place: "Brasov",
		love: "Te iubesc pentru farmecul pe care l-ai avut asupra mea de la inceput",
		message:
			"Probabil e ciudat ceea ce vezi. Nu înțelegi exact unde si la ce sa te uiți. Tot ce îți cer este sa te întorci aici, zi de zi, cu un minut înainte de 21:35. Ca si oameni, tindem sa fim foarte concentrați pe prezent si pe viitor, dar câteodată e plăcut sa te oprești si sa te uiți la drumul parcurs. Un an si șase luni e mult. Am trecut împreună prin atâtea schimbări si stări. Nu aș ști să-ți spun exact ce simțeam acum un an, șase luni si o zi, dar aș crede ca eram confuz si speriat, dar in același timp fericit, cu o speranța ca vom fi împreună.",
	},
	{
		day: 14,
		classDate: new Date("May 15, 2025, 21:35:00 UTC+3"),
		photo: "1.JPG",
		date: "3 aprilie 2024",
		place: "Pietrele lui Solomon",
		love: "<3 Te iubesc pentru ca imi oferi libertatea de a fi autentic <3",
		message:
			"Cu toții avem dorințe si aspirații. Este normal sa depunem eforturi mari pentru a ajunge unde ne dorim. Dar care este pragul moralității? A devenit o moda sa ne “mulam după persoane” si sa fim diferiți cu toate lumea. Este atât de ușor sa te pierzi pe tine însuți. Si cu toate astea, mereu ai reușit sa mă aduci la cine sunt eu. Chiar așa golan sau galant, înțelept sau idiot, interesant sau plictisitor cum am fost eu, nu mi-ai pus niciodată presiunea de “a fi diferit”. E frumoasă normalitatea.",
	},
];

const timerContainer = document.getElementById("timer-container");
const imageContainer = document.getElementById("photo-frame");
const messageContainer = document.getElementById("message-container");

const image = imageContainer.children.item(0);
const date = imageContainer.children.item(1);
const place = imageContainer.children.item(2);

const love = messageContainer.children.item(0);
const message = messageContainer.children.item(1);

let relDay;
let relDate;

let dayIndex;
let dayData;

relDate;

updateData(true);

date.innerHTML = dayData.date;
place.innerHTML = dayData.place;
love.innerHTML = dayData.love;
message.innerHTML = dayData.message;

let reached = 0;

const sleep = (milliseconds) => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

function updateData(start) {
	if (start) {
		const now = new Date();
		if (now.getHours() >= 21 && now.getMinutes() >= 35) relDay = now.getDate();
		else relDay = now.getDate() - 1;
	} else {
		relDay++;
		if (relDay == 32) relDay = 1;
	}

	dayIndex = data.indexOf(data.find((d) => d.day == relDay));
	dayData = data[dayIndex];

	relDate = dayData.classDate;

	image.src = `./assets/${dayData.photo}`;

	console.log(dayIndex);
}

function displayTime(showTime) {
	let time = relDate.getTime() - showTime;

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

async function update() {
	if (reached == 2) return;
	else if (reached == 1 && Date.now() >= relDate.getTime()) {
		reached = 2;
		updateData(false);

		await sleep(1000);

		image.classList.remove("trans");
		image.classList.add("optrans");

		for (const char of dayData.place) {
			place.innerHTML += char;
			await sleep(50);
		}

		await sleep(500);

		for (const char of dayData.date) {
			date.innerHTML += char;
			await sleep(50);
		}

		await sleep(2000);

		for (const char of dayData.message) {
			message.innerHTML += char;
			await sleep(10);
		}

		await sleep(25000);

		for (const char of dayData.love) {
			love.innerHTML += char;
			await sleep(75);
		}
	} else if (reached == 0) {
		if (Date.now() + 15000 >= relDate.getTime() && Date.now() + 8000 < relDate.getTime()) {
			reached = 1;
			for (let i = message.innerHTML.length; i > 0; i--) {
				message.innerHTML = message.innerHTML.slice(0, -1);
				await sleep(5);
			}
			for (let i = love.innerHTML.length; i > 0; i--) {
				love.innerHTML = love.innerHTML.slice(0, -1);
				await sleep(25);
			}

			await sleep(500);

			for (let i = place.innerHTML.length; i > 0; i--) {
				place.innerHTML = place.innerHTML.slice(0, -1);
				await sleep(50);
			}
			for (let i = date.innerHTML.length; i > 0; i--) {
				date.innerHTML = date.innerHTML.slice(0, -1);
				await sleep(50);
			}
			await sleep(1000);
			image.classList.remove("optrans");
			image.classList.add("trans");
		} else if (Date.now() + 8000 >= relDate.getTime()) updateData();
	}
}

displayTime(Date.now());
setInterval(async () => {
	update();
	displayTime(Date.now());
}, 10);

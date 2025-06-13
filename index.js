let h = document.getElementById("hrs");
let m = document.getElementById("mins");
let s = document.getElementById("secs");
let ms = document.getElementById("ms");

const titleToWrite = "💜 Te iubesc (si atat) 💜";
const messageToWrite = `In final, Ioana, e timpul sa nu conditionez iubirea mea pentru tine. Toate aceste mesaje sunt motive palpabile pentru care te apreciez. Insa consider ca iubirea
dintre noi doi este dincolo de ceea ce poate fi vazut sau auzit. Asa ca dupa tot ceea ce ti-am transmis in ultimele 31 de zile, vreau sa iti spun ca te iubesc
pentru ceea ce esti in interiorul intruchiparii tale fizice. Te iubesc pentru prezenta sufletului tau pe acest pamant. Si totusi, odata analizate, pana si aceste
propozitii reprezinta iubirea conditionata. Deci, in final (pentru a 2-a oara), mesajul pe care vreau de fapt sa il transmit este "Te iubesc."`;

const timerContainer = document.getElementById("timer-container");
const imageContainer = document.getElementById("photo-frame");
const messageContainer = document.getElementById("message-container");

const infoContainer = document.getElementById("info-container")
const selectContainer = document.getElementById("select-container")

const title = infoContainer.children.item(0);
const message = infoContainer.children.item(1);

let reached = 0;

const relDate = new Date("June 13, 2025, 21:35:00 UTC+3")

const sleep = (milliseconds) => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

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
	if (reached == 0) {
		if (Date.now() >= relDate.getTime() + 20000) {
			reached = 2;
			messageContainer.classList.add("rawTrans");
			imageContainer.classList.add("rawTrans");
			timerContainer.classList.add("rawTrans");

			message.innerHTML = messageToWrite;
			title.innerHTML = titleToWrite;

			for (let i = 0; i < 31; i++) {
				const element = selectContainer.children.item(i);
				element.classList.remove("trans");
				element.classList.add("optrans");
				await sleep(250)
			}
		}
	 	else if (Date.now() >= relDate.getTime()) {
			reached = 1;
			messageContainer.classList.add("trans");
			await sleep(1000)
			imageContainer.classList.add("trans");
			await sleep(1000)
			timerContainer.classList.add("trans")

			await sleep(1500);

			for (const char of messageToWrite) {
				message.innerHTML += char;
				await sleep(10);
			}
	
			await sleep(15000);
	
			for (const char of titleToWrite) {
				title.innerHTML += char;
				await sleep(75);
			}
			await sleep(1500);

			for (let i = 0; i < 31; i++) {
				const element = selectContainer.children.item(i);
				element.classList.remove("trans");
				element.classList.add("optrans");
				await sleep(250)
			}
		}
	}
}

displayTime(Date.now());
setInterval(async () => {
	update();
	if (reached == 1) displayTime(relDate.getTime());
	else if (reached == 0) displayTime(Date.now())
}, 10);

const infoContainer = document.getElementById("info-container");
const selectContainer = document.getElementById("select-container");

let reached = 0;

const relDate = new Date("June 13, 2025, 21:35:00 UTC+3");

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
	for (let i = 0; i < 31; i++) {
		const element = selectContainer.children.item(i);
		element.classList.remove("trans");
		element.classList.add("optrans");
		await sleep(250);
	}
}

update();

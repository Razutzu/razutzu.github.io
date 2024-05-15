const d = document.getElementById("days").children.item(0);
const h = document.getElementById("hrs").children.item(0);
const m = document.getElementById("mins").children.item(0);
const s = document.getElementById("secs").children.item(0);
const progress = document.getElementById("progressBar");

const continer = document.getElementById("container");
const progressContainer = document.getElementById("progress");

const messageContainer = document.getElementById("message-container");
const displayedMessage = messageContainer.children.item(1);
const leftPhotos = messageContainer.children.item(0);
const rightPhotos = messageContainer.children.item(2);

const relDate = new Date("November 13, 2023, 21:35:00 UTC+3	").getTime();
const start = new Date("April 13, 2024, 21:35:00 UTC+3").getTime();
const reach = new Date("May 13, 2024, 21:35:00 UTC+3").getTime();

const slides = [
	{
		title: "Timpul trece...",
		height: 180,
		message:
			"182 de zile. 4.358 de ore. 262.080 de minute. E incredibil. 2,88% din viața ta și 3% din viața mea, în care ne-am dedicat timp, emoții, răbdare unul celuilalt. Au fost 182 de zile în care am început sa înțeleg ce înseamnă sa iubești și să fii iubit. Am trecut prin multe momente și experiențe în această perioadă. Unele mai bune, altele mai puțin bune. Hai sa o luam de la început, de când am vorbit început să vorbim.",
		right: ["tras", "tras"],
		left: ["tras", "tras"],
	},
	{
		title: "Octombrie",
		height: 130,
		message:
			"Luna în care a început totul. Atunci am început sa interacționăm mai mult și mai mult, pana când am ajuns sa ne “plictisim împreună” :) A fost o luna plină de descoperiri. A fost perioada în care viața începea sa mi se coloreze datorită ție. Sunt șocat cât de mult ne-am apropiat în acest timp. In acea perioada nu credeam ca o sa ajung sa te iubesc atât de mult. Nu credeam ca ar fi posibil sa am o relație cu tine.",
		right: ["0/21", "half-tras"],
		left: ["0/11", "0/23"],
	},
	{
		title: "Noiembrie",
		height: 130,
		message:
			"Început oficial al relației. Primul sărut, cred ca cel mai greu pas pe care l-am făcut în aceasta relație. Au avut loc primele activități împreună, cum ar fi piesa de teatru, filmul, dansul de pe Saguna :). A fost o luna frumoasă cu fluturi în stomac, care a stat la baza relației noastre. Atunci am început sa am încredere ca e posibil, ca poate am găsit persoana potrivită.",
		right: ["1/11", "1/12"],
		left: ["1/9", "1/18"],
	},
	{
		title: "Decembrie",
		height: 130,
		message:
			"Am început să ne apropiem din ce în ce mai mult. Am continuat cu diferite activități noi pentru amândoi. Țin minte cât de indecis eram daca sa mergem la escape room sau nu. Încă nu știam exact ce-ți place. Acum ii mulțumesc lui Adi din trecut ca a ales asta, pentru ca a fost o activitate care ne-a apropiat. Excursia de la Sinaia a fost una senzațională. A fost foarte drăguț primul “te iubesc”, a fost drăguț cât de mult ai stat sa te gândești :). A fost o luna în care îmi dădeam seama ca ești exact ce căutăm în viața mea. Imi dădeam seama ca daca trebuia sa descriu o fata perfecta, te-aș fi descris pe tine.",
		right: ["2/13", "2/16"],
		left: ["2/11", "2/14"],
	},
	{
		title: "Ianuarie",
		height: 130,
		message:
			"Luna ianuarie n-a fost una ușoară. A fost vacanța care ne-a despărțit, în care efectiv simțeam ca te pierd, fără sa știu de ce. Atunci am început sa rămân fără idei de activități, ceea ce m-a stresat puțin. Credeam ca o relație consta doar în diferite activități. După ceva timp am înțeles ca o relație e și despre momente în care nu facem nimic, în care doar ne bucuram de prezenta celuilalt. Acum am început sa prefer momentele de liniște decât momentele în care facem ceva. Prezenta ta este una liniștitoare.",
		right: ["3/11", "3/24"],
		left: ["3/7", "3/12"],
	},
	{
		title: "Februarie",
		height: 130,
		message:
			"Chill e tot ce pot sa zic. Ca în fiecare luna, ne apropiam din ce în ce mai mult. Cina în familie a fost genială :)) Mi-a plăcut sa stam și cu cumnata la masa, sa mâncăm sushi de la Lidl (vezi ca încă trebuie sa mâncăm sushi. N-am făcut-o la Sighișoara, o facem alta data). Iar cea mai importanta parte din luna aceasta a fost prima noapte împreună. Atunci ne-am apropiat foarte mult. Am simțit și eu, și tu asta. Nu mă așteptăm, insa s-a întâmplat, și a fost genial. Nu credeam vreodată ca așa se simte sa dormi cu persoana pe care o iubești.",
		right: ["4/17", "4/17 2"],
		left: ["4/3", "4/24"],
	},
	{
		title: "Martie",
		height: 130,
		message:
			"Cred ca aici am găsit împreună echilibrul dintre distracție și relaxare. Am început sa ne bucuram la fel de mult de orice moment împreună. Ne-am uitat la filmul “Casatoriti din greșeală”, genial :). A fost un moment simplu, dar chiar ne-am simțit bine. Cred ca din momentul asta am început sa iau relația ca pe un lucru serios din viața mea. De la început ai fost o prioritate, dar de aici a început sa se accentueze.",
		right: ["5/18", "5/31"],
		left: ["5/6", "5/20"],
	},
	{
		title: "Aprilie",
		height: 130,
		message:
			"Pentru perioada asta am o descriere simplă: senzațional. Cred ca asta a fost una din cele mai mișto, poate chiar cea mai misto luna din toată relația noastră. Am trecut prin neînțelegerea de la Sibiu, când am avut impresia ca totul va cădea de acolo, insa spre suprinderea mea, a fost un punct puternic de apropiere. Te simțeam mai aproape ca niciodată. Au avut loc o mulțime de momente de nedescris împreună. Pur și simplu extraordinar. Totul se întâmplă cu un scop.",
		right: ["6/3 2", "6/27"],
		left: ["6/3", "6/23"],
	},
	{
		title: "Mai",
		height: 130,
		message:
			"Abia a început. Totuși, în aceste câteva zile m-am simțit minunat cu tine. Cel puțin de când ai lăsat toate barierele jos, te apreciez mai mult ca niciodată. Acum te vad ca persoana cu care aș vrea sa fiu alături pana la capătul zilelor mele. Ești o persoana extraordinara și o sa am grija sa ții minte asta mereu. Ii multumesc destinului ca mi-a adus un înger pe Pamant. Sunt recunoscător pana în adâncul sufletului.",
		right: ["7/11 2", "7/11 4"],
		left: ["7/11 1", "7/11 3"],
	},
	{
		title: "Si in final, tot ce am de zis este...",
		simple: true,
	},
	{
		title: "Te iubesc!",
		simple: true,
	},
];

let slide = -1;
let reached = false;
let changing = false;

let desc;

const sleep = (milliseconds) => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

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

async function update() {
	if (reached) return;
	if (Date.now() >= reach) {
		reached = true;
		displayTime(reach);
		await sleep(5000);
		continer.classList.add("transparent");
		await sleep(1000);
		progressContainer.classList.add("transparent");
		nextSlide();
		document.addEventListener("keydown", (e) => {
			if (e.defaultPrevented) return;
			if (e.key == "d") nextSlide();
			else if (e.key == "a") previousSlide();
			e.preventDefault();
		});
		return false;
	}

	displayTime(Date.now());
	return true;
}

async function previousSlide() {
	if (changing) return;
	if (slide == 0) return;
	slide--;
	transition();
}

async function nextSlide() {
	if (changing) return;
	if (slide == slides.length - 1) return;
	slide++;
	transition();
}

async function transition() {
	changing = true;
	displayedMessage.classList.add("transparent");
	displayedMessage.classList.remove("non-transparent");
	await sleep(1000);
	leftPhotos.children.item(0).classList.add("transparent");
	leftPhotos.children.item(0).classList.remove("non-transparent");
	await sleep(1000);
	leftPhotos.children.item(1).classList.add("transparent");
	leftPhotos.children.item(1).classList.remove("non-transparent");
	await sleep(1000);
	rightPhotos.children.item(0).classList.add("transparent");
	rightPhotos.children.item(0).classList.remove("non-transparent");
	await sleep(1000);
	rightPhotos.children.item(1).classList.add("transparent");
	rightPhotos.children.item(1).classList.remove("non-transparent");
	await sleep(1500);

	if (slides[slide].simple) {
		displayedMessage.children.item(0).innerHTML = "";
		displayedMessage.children.item(0).style = "width: 700px;";
		displayedMessage.children.item(1).style = `height: 0px;`;
		displayedMessage.children.item(1).innerHTML = "";
		displayedMessage.classList.remove("transparent");
		for (i = 0; i < slides[slide].title.length; i++) {
			displayedMessage.children.item(0).innerHTML += slides[slide].title[i];
			await sleep(25);
		}
	} else {
		leftPhotos.children.item(0).src = `images/${slides[slide].left[0]}.png`;
		leftPhotos.children.item(1).src = `images/${slides[slide].left[1]}.png`;

		rightPhotos.children.item(0).src = `images/${slides[slide].right[0]}.png`;
		rightPhotos.children.item(1).src = `images/${slides[slide].right[1]}.png`;

		console.log((rightPhotos.children.item(0).src = `images/${slides[slide].right[0]}.png`));

		await sleep(500);

		leftPhotos.children.item(0).classList.add("non-transparent");
		leftPhotos.children.item(0).classList.remove("transparent");
		await sleep(500);
		leftPhotos.children.item(1).classList.add("non-transparent");
		leftPhotos.children.item(1).classList.remove("transparent");
		await sleep(500);
		rightPhotos.children.item(0).classList.add("non-transparent");
		rightPhotos.children.item(0).classList.remove("transparent");
		await sleep(500);
		rightPhotos.children.item(1).classList.add("non-transparent");
		rightPhotos.children.item(1).classList.remove("transparent");
		displayedMessage.children.item(0).innerHTML = "";
		displayedMessage.children.item(1).style = `height: ${slides[slide].height}px;`;
		displayedMessage.children.item(1).innerHTML = "";
		displayedMessage.classList.remove("transparent");
		await sleep(1000);
		for (i = 0; i < slides[slide].title.length; i++) {
			displayedMessage.children.item(0).innerHTML += slides[slide].title[i];
			await sleep(25);
		}
		await sleep(1500);
		for (i = 0; i < slides[slide].message.length; i++) {
			displayedMessage.children.item(1).innerHTML += slides[slide].message[i];
			await sleep(15);
		}
	}
	changing = false;
}

if (update()) setInterval(update, 1000);

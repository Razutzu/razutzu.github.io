let h = document.getElementById("hrs");
let m = document.getElementById("mins");
let s = document.getElementById("secs");
let ms = document.getElementById("ms");

const data = [
	{
		day: 13,
		classDate: new Date("May 14, 2025, 21:35:00 UTC+3"),
		photo: "0.JPG",
		date: "12 noiembrie 2023",
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
		love: "💜 Te iubesc pentru că îmi oferi libertatea de a fi autentic 💜 ",
		message:
			"Cu toții avem dorințe si aspirații. Este normal sa depunem eforturi mari pentru a ajunge unde ne dorim. Dar care este pragul moralității? A devenit o moda sa ne “mulam după persoane” si sa fim diferiți cu toate lumea. Este atât de ușor sa te pierzi pe tine însuți. Si cu toate astea, mereu ai reușit sa mă aduci la cine sunt eu. Chiar așa golan sau galant, înțelept sau idiot, interesant sau plictisitor cum am fost eu, nu mi-ai pus niciodată presiunea de “a fi diferit”. E frumoasă normalitatea.",
	},
	{
		day: 15,
		classDate: new Date("May 16, 2025, 21:35:00 UTC+3"),
		photo: "2.JPG",
		date: "15 martie 2024",
		place: "Caminul Andrei Muresanu",
		love: "💜 Te iubesc pentru că dai viață iubirii noastre prin simplitatea ta 💜",
		message:
			"Suntem ființe complexe, într-o lume haotică, într-un univers vast. Tot ceea ce înseamnă viața este prin definiție complex. Cred ca din cauza asta căutăm involuntar complexitate în ceea ce facem. Dar câteodată momentele simple sunt cele mai prețioase. Daca stau sa analizez, cele mai frumoase momente alaturi de tine sunt cele mai simple. Mereu m-a fascinat fericirea ta din simplul timp petrecut impreuna. Iti multumesc, pentru ca mi-ai oferit linistea pe care multi baieti nu o au: orice s-ar intampla, simpla prezenta reciproca este cea care o sa ne implineasca sufletele.",
	},
	{
		day: 16,
		classDate: new Date("May 17, 2025, 21:35:00 UTC+3"),
		photo: "3.JPG",
		date: "8 aprilie 2024",
		place: "AFI Brasov",
		love: "💜 Te iubesc pentru ca faci copilul din mine sa zambeasca 💜",
		message:
			"Suntem adolescenți. Câteodată când stau sa mă gândesc la asta rămân uimit. Încercăm atât de mult sa trecem prin procesul dureros de maturizare, încât uitam de esență si de inocentă noastră. Stau câteodată si merg înapoi in timp, si simt un gol când îmi dau seama cum încet-încet se stinge flacăra copilului inocent si curios. Dar tu, surprinzător, nu ți-ai pierdut-o niciodată, si m-ai ajutat sa mi-o păstrez si pe a mea. Nu ratezi nicio ocazie de a-mi straluci ochii, lasandu-ti inocenta sa iasa la iveala. Timpul pe care copiii din sinea noastra l-au petrecut impreuna este cel care ne-a legat inimile cel mai mult.",
	},
	{
		day: 17,
		classDate: new Date("May 18, 2025, 21:35:00 UTC+3"),
		photo: "4.JPG",
		date: "14 septembrie 2024",
		place: "Impresso Coffee & Bar",
		love: "💜 Te iubesc pentru ca nu m-ai lasat sa cad, chiar daca ai fi putut sa cazi si tu 💜",
		message:
			"Cand mă uit la poza asta, îmi aduc aminte de zilele în care nu mai simțeam viața prin vene. Eram doar o persoana care exista si nu mă bucuram de niciun minut din ziua mea. A fost o perioada dificilă, în care nu mai vedeam sens în nimic. Si totuși, în zilele cele mai întunecate, când nici tu nu mai primeai afecțiunea pe care o meritai, ai fost acolo, lângă mine. Mi-ai dat fiecare strop din empatia, compasiunea si iubirea ta. Mi-ai arătat ca orice s-ar întâmplă si oricât de greu ar fi, vei fi lângă mine, pana răsare din nou soarele.",
	},
	{
		day: 18,
		classDate: new Date("May 19, 2025, 21:35:00 UTC+3"),
		photo: "5.JPG",
		date: "",
		place: "La distanta",
		love: "💜 Te iubesc pentru că oferi un suflet obiectelor neînsuflețite 💜",
		message:
			"Creativitatea este o caracteristica care ne simbolizează pe noi ca specie umană. In toată evoluția noastră de la epoca de piatra pana în prezent ne-am folosit de creativitate pentru a ajunge cu o treapta mai sus. Oamenii sunt fascinanți pentru abilitatea de a fi creativi, insa consider ca aceasta este mereu împinsă de ceva mult mai profund. In cazul tău, iubirea te-a făcut sa creezi opere de arta. De fiecare data când deschid cutia cu obiecte de la tine, mă lovește un val de nenumărate emoții, ducându-mă în fiecare perioada si stare pe care am trait-o în trecut, alaturi de tine. Ai reusit sa faci amintirile impreuna nemuritoare.",
	},
	{
		day: 19,
		classDate: new Date("May 20, 2025, 21:35:00 UTC+3"),
		photo: "6.jpg",
		date: "4 septembrie 2024",
		place: "Costinești",
		love: "💜 Te iubesc pentru razele de soare pe care mi le aduci după furtunile fără sfârșit 💜",
		message:
			"Nu a fost deloc ușor. Îndrăznesc sa spun ca a fost una dintre cele mai dure veri din viața noastră, care ne-a permis sa simțim din gustul amar al lumii de adult. Dar totuși am reușit. Am reușit sa fim asumați si sa trecem cu cate un pas peste provocările dureroase ale acestei experiențe. Dar cel mai important, după o perioada atât de greu de digerat, am reușit sa ne bucuram de cea mai plăcută vacanță pe care ne-am dăruit-o reciproc. Ma încântă gandul ca am fost alături de tine, privindu-ți fericirea pură când ai admirat pentru prima data orizontul infinit al mării.",
	},
	{
		day: 20,
		classDate: new Date("May 21, 2025, 21:35:00 UTC+3"),
		photo: "7.JPG",
		date: "23 octombrie 2023",
		place: "Impresso",
		love: "💜 Te iubesc pentru ca ai fost motivul primului zambet dupa intunericul fara sfarsit 💜",
		message:
			"Începuturile sunt mereu fascinante. Entuziasmul si fericirea pe care am simțit-o este de nedescris. Chiar daca a fost o extrema nepotrivita, număram minutele pana la o următoarea ieșire cu tine. După despărțirea de familie si lovitura pe care mi-a dat-o realitatea, mi-ai umplut un gol mare in suflet. Mi-ai vindecat lipsa familiei. Ai fost si ești motivul pentru care zâmbesc in fiecare dimineața si adorm in caldura sufleteasca. Odată cu mutarea la Brașov, aș fi putut ajunge o persoana neplăcută, cu obiceiuri si priorități proaste. Insa tu, Ioana, ești motivul pentru care am ajuns cine sunt astăzi.",
	},
	{
		day: 21,
		classDate: new Date("May 22, 2025, 21:35:00 UTC+3"),
		photo: "8.jpg",
		date: "3 septembrie 2024",
		place: "Costinești",
		love: "💜 Te iubesc pentru că m-ai cuprins în brațe chiar și când sufletul meu era plin de spini 💜",
		message:
			"Vacanță a fost una mirifica. Ne-am distrat, ne-am simțit bine. Ne-am bucurat de rezultatele muncii noastre. Insa când mă uit la poza asta nu pot sa nu îți observ ochii. Când mă uit la ei, vad o tristețe profundă. O confuzie fără margini. Ai fost puternică, chiar ai fost. Totuși ma macină faptul ca nu am observat asta atunci. Simt ca nu ți-am acordat grija pe care ai meritat-o de fapt. Acum înțeleg ca a fost greu pentru amândoi. Iar tu, dincolo de starea ta adâncă și de atitudinea mea, m-ai iubit la fel. Am noroc rar întâlnit: situ ce înseamnă sa fii iubit necondiționat. Sunt mândru de tine, Ioana. Îți mulțumesc.",
	},
	{
		day: 22,
		classDate: new Date("May 23, 2025, 21:35:00 UTC+3"),
		photo: "9.JPG",
		date: "17 februarie 2024",
		place: "Gara Brasov",
		love: "💜 Te iubesc pentru ca mi-ai aratat ce inseamna de fapt sa traiesti 💜",
		message:
			"“Stabilitatea este un sentiment cald și plăcut. Este visul oricui sa trăiască cu gândul ca orice s-ar întâmplă este în siguranță. Dar luând imaginea întregii vieți în considerare, ce ai realizat traind în stabilitate?”. Așa arătau gândurile mele când te-am cunoscut. Au apărut întrebări, dorințe și aspiratii. Datorită ție am început sa explorez lumea. Datorită ție am început sa ies din zona de confort. Momentele și rezultatele nesiguranței au fost cele mai pline de viața. Au fost momentele in care ma intrebam “Chiar trebuie sa se termine?”. Insa totul a început de la simple călătorii. Călătorii care mi-au dat gustul amar al nesigurantei, dar cu un aftertaste dulce si placut. Sa nu uiți niciodată asta: ai fost, ești și vei fi mereu motivatia mea.",
	},
	{
		day: 23,
		classDate: new Date("May 24, 2025, 21:35:00 UTC+3"),
		photo: "10.JPG",
		date: "29 septembrie 2024",
		place: "Meron",
		love: "💜 Te iubesc pentru maturitatea ta ascunsa intr-un suflet inocent. 💜",
		message:
			"Poate este o părere subiectiva, dar pana în adancul conștiinței mele consider ca avem o relație frumoasă. Mai mult decât atât, persoanele din exterior cred ca avem o relație ideală. Daca cineva s-ar uita la aceasta poza ar vedea doar 2 cafele. Totuși doar noi știm furtuna emoțională care a fost în spatele acestei poze. Am fi putut sa ne despărțim în multe momente, Ioana. Insa amândoi am ales conștient cea mai buna varianta, dar nu și cea mai ușoară. Am ales sa ne asumam problemele din relația noastră și sa trecem peste ele. Împreună pana la capat. Ce e mai frumos decât asta?",
	},
	{
		day: 24,
		classDate: new Date("May 25, 2025, 21:35:00 UTC+3"),
		photo: "11.JPG",
		date: "1 ianuarie 2025",
		place: "Culcusul tau",
		love: "💜 Te iubesc pentru modestia ta 💜",
		message:
			"Prima mea vizita la casa familiei tale a fost una stresanta atât pentru mine, ca și pentru tine. A fost un punct de apropiere puternic, venind în locul în care ai copilărit, dar și întâlnind persoanele cu care ai crescut. Ți-a fost frica ca te voi judeca, dar spre suprinderea ta, mediul din care vii mă face sa te iubesc cel mai mult. Casa ta mi-a dat cea mai liniștită și ușoară stare pe care am simțit-o în ultima perioada. De ce? Simplitatea familiei tale m-a făcut sa mă simt la fel de simplu.",
	},
	{
		day: 25,
		classDate: new Date("May 26, 2025, 21:35:00 UTC+3"),
		photo: "12.jpg",
		date: "24 ianuarie 2024",
		place: "Piata Unirii",
		love: "💜 Te iubesc pentru intreaga constelatie din simpla ta privire 💜",
		message:
			"Ochii sunt oglinda sufletului. Doar atât am de zis. Ochii tai sunt la fel de fermecători ca si sufletul tău. Este atât de puternică conexiunea sufletelor printr-un simplu contact vizual. Conexiune care a marcat primii fluturi in stomac. Poza asta este una dintre preferatele mele, pentru ca pot vedea fiecare detaliu si strălucire a ochilor tai. Am văzut mii de perechi de ochi in viața mea, insa doar a ta a reușit să-mi rămână întipărită in inimă.",
	},
	{
		day: 26,
		classDate: new Date("May 27, 2025, 21:35:00 UTC+3"),
		photo: "13.jpg",
		date: "24 februarie 2024",
		place: "Fântâna Uranus",
		love: "💜 Te iubesc pentru recunostința ta față de fiecare moment petrecut împreună 💜",
		message:
			"Ultimile minute petrecute împreună sunt cele mai scurte. Ultimele momente sunt, uneori, si cele mai dureroase, amândoi știind ca după acele ultime secunde ne vom revedea după alte zeci de mii de secunde. Fiecare sentiment, fie el plăcut sau neplăcut, se amplifica. Inima bate mai repede, încercând sa tragă din răsputeri încă un minut in plus. Creierul e anxios, oscilând intre raționament si sentiment. Si totuși am stat acolo. Secunda cu secunda. Am ras, am plâns, dar dincolo de toate ne-am bucurat ca încă suntem împreună, lăsând problemele, responsabilitățile si grijile pentru alta data.  ",
	},
	{
		day: 27,
		classDate: new Date("May 28, 2025, 21:35:00 UTC+3"),
		photo: "14.JPG",
		date: "19 ianuarie 2024",
		place: "Caminul Andrei Muresanu",
		love: "💜 Te iubesc pentru că mi-ai oferit privilegiul de a o cunoaște pe Ioana 💜",
		message:
			"Amândoi reținem cu ușurință momentele de “wtf”. Sunt momente fine, in care ușor ușor ies la iveala micile trăsături native ale caracterului nostru. E ciudat, e drăguț si câteodată cringe. Dar e atât de frumos sa vezi cum persoana pe care o iubești cel mai mult se deschide fata de tine. Cum își lasă barierele. Cum imărtaseste cu tine cel mai de preț lucru: pe ea însăși. Unele cupluri se despart la aceste scăpări si deschidere, si nu pot decât sa ma întreb: de ce, când eu stau, zi de zi, si te admir pentru energia, vibrația si natura ta.",
	},
	{
		day: 28,
		classDate: new Date("May 29, 2025, 21:35:00 UTC+3"),
		photo: "15.JPG",
		date: "12 mai 2024",
		place: "Sighișoara",
		love: "💜 Te iubesc pentru ca m-ai accepta și stângaci, într-o lume plină de dreptaci 💜",
		message:
			"“Măăi Adiii”. Când aud asta inima mi se topește. Ma cerți in timp ce îmi arăți ca ma iubești. Am fost de atâtea ori stângaci, si totuși fiecare moment de genul te-a apropiat din ce in ce mai mult de mine. Si cred ca este o explicație foarte simplă pentru asta. Suntem oameni. Cu bune, cu rele, suntem oameni care vor sa iubească si sa fie iubiți. Ne împlinim reciproc, Ioana. Ne dam viața si crestem împreună. Cum aș putea spune vreodată ca sunt neîmplinit in viața?",
	},
	{
		day: 29,
		classDate: new Date("May 30, 2025, 21:35:00 UTC+3"),
		photo: "16.JPG",
		date: "25 martie 2024",
		place: "Coresi?",
		love: "💜 Te iubesc pentru ca oferi o voce hainelor 💜",
		message:
			"Stii, când am venit in Brașov mi s-a întors lumea pe dos. Nu doar pentru ca am nimerit într-o lumea total diferită si pentru ca m-am despărțit de familie, dar si pentru ca am descoperit fenomenele cu pantaloni la genunchi si fete îmbrăcate 30%. Bănuiesc ca unii fug după asta. Am crezut ca va trebui sa merg după turma, neavând de ales. Insa te-am cunoscut pe tine. Mi-ai deschis ochii. Mi-ai arătat ce înseamnă finețe, rafinament si eleganta. In primele seri de teatru ma lăsai cu gura căscată. Nu după 70% piele, ci după finețe si un echilibru minunat vestimentar. Iar datorită ție, am început sa vreau si eu mai mult. Am realizat ca exista mai mult decât blugi si hanorac. Am realizat ca fiecare stil vestimentar are o energie.",
	},
	{
		day: 30,
		classDate: new Date("May 31, 2025, 21:35:00 UTC+3"),
		photo: "17.jpg",
		date: "16 noiembrie 2024",
		place: "Alba Iulia",
		love: "💜 Te iubesc pentru grija ta prin detalii marunte 💜",
		message:
			"Dimineața e cea mai grea parte a zilei pentru mine. Din momentul in care deschid ochii sunt copleșit de toate gândurile si responsabilitățile. Cu toate astea, când ești blocat in gânduri infinite, gesturile mici sunt cele mai frumoase. Când te trezești si vezi ca persoana iubita și-a luat din timpul ei ca să-ți facă dimineața mai ușoară este minunat. Iar tu ai făcut asta de fiecare când ai avut ocazia. Mereu ai reușit sa ai grija de mine prin gesturile mărunte, care faceu o zi rea sa fie buna, iar o zi buna sa fie extraordinara. Daca le pun in balanța, aș servi cu mai mult drag o cafea arsa făcută de tine decât un mic dejun scump.",
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

let reached = 0;

updateData(true, true);

const sleep = (milliseconds) => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

function updateData(start, updateText) {
	if (start) {
		const now = new Date();
		if (now.getHours() > 21 || (now.getHours() == 21 && now.getMinutes() >= 35)) relDay = now.getDate();
		else relDay = now.getDate() - 1;
	} else {
		relDay++;
		if (relDay == 32) relDay = 1;
	}

	dayIndex = data.indexOf(data.find((d) => d.day == relDay));
	dayData = data[dayIndex];

	relDate = dayData.classDate;

	image.src = `./assets/${dayData.photo}`;

	if (updateText) {
		date.innerHTML = dayData.date;
		place.innerHTML = dayData.place;
		love.innerHTML = dayData.love;
		message.innerHTML = dayData.message;
	}

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
		updateData(false, false);

		await sleep(500);

		image.classList.remove("trans");
		image.classList.add("optrans");

		await sleep(2000);

		for (const char of dayData.date) {
			date.innerHTML += char;
			await sleep(50);
		}

		await sleep(500);

		for (const char of dayData.place) {
			place.innerHTML += char;
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
		} else if (Date.now() + 8000 >= relDate.getTime() && Date.now() <= relDate.getTime()) {
			updateData(false, true);

			date.innerHTML = dayData.date;
			place.innerHTML = dayData.place;
			love.innerHTML = dayData.love;
			message.innerHTML = dayData.message;
		}
	}
}

displayTime(Date.now());
setInterval(async () => {
	update();
	displayTime(Date.now());
}, 10);

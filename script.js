function submit_news() {
	var full = document.getElementById("mainform");
	var autor = full.elements[1].value;
	var data = full.elements[2].value;
	var pronoun = full.elements[3].value;
	var title_one = full.elements[4].value.toUpperCase();
	var news_one = full.elements[5].value;
	var title_two = full.elements[6].value.toUpperCase();
	var news_two = full.elements[7].value;
	var title_three = full.elements[8].value.toUpperCase();
	var news_three = full.elements[9].value;

	var prepared = "A wiadomości przygotował" + pronoun + " " + autor + ".";

	document.getElementById("rdata").innerHTML = data;
	document.getElementById("titleone").innerHTML = title_one;
	document.getElementById("titletwo").innerHTML = title_two;
	document.getElementById("titlethree").innerHTML = title_three;
	document.getElementById("newsone").innerHTML = news_one;
	document.getElementById("newstwo").innerHTML = news_two;
	document.getElementById("newsthree").innerHTML = news_three;
	document.getElementById("ending").innerHTML = prepared;

	var toRender = document.getElementById("render");
	toRender.style.display = "inline";

	generate("Wiadomości", toRender, autor)
}

function submit_calendar() {
	var full = document.getElementById("mainform");
	var autor = full.elements[1].value;
	var data = full.elements[2].value;
	var names = full.elements[3].value;
	var pronoun = full.elements[4].value;
	var news_one = full.elements[5].value;
	var news_two = full.elements[6].value;
	var news_three = full.elements[7].value;

	var	beg = "Mamy dziś " + data + ". Imieniny obchodzą: " + names + ". Oto kilka wydarzeń, które miały miejsce tego dnia."
	var end = "A kartkę z kalendarza przygotował" + pronoun + " " + autor + ".";

	document.getElementById("rdata").innerHTML = data;
	document.getElementById("intro").innerHTML = beg;
	document.getElementById("newsone").innerHTML = news_one;
	document.getElementById("newstwo").innerHTML = news_two;
	document.getElementById("newsthree").innerHTML = news_three;
	document.getElementById("ending").innerHTML = end;

	var toRender = document.getElementById("render");
	toRender.style.display = "inline";

	generate("KZK", toRender, autor)
}


function generate(type, tr, autor) {
	tr.style.visibility = "visible";
	var opt = {
		margin: 0.5,
		filename: type + " " + autor,
		jsPDF: {unit: 'in', orientation: 'portrait', format: 'letter'},
		html2canvas: {scale: 2}
	};
	html2pdf().set(opt).from(tr).save();
}
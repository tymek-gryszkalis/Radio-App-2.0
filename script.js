function submit_news(type) {
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

	var prepared = "A wiadomości przygotował" + pronoun + " <b>" + autor + "</b>.";

	document.getElementById("rdata").innerHTML = data;
	document.getElementById("titleone").innerHTML = title_one;
	document.getElementById("titletwo").innerHTML = title_two;
	document.getElementById("titlethree").innerHTML = title_three;
	document.getElementById("newsone").innerHTML = news_one;
	document.getElementById("newstwo").innerHTML = news_two;
	document.getElementById("newsthree").innerHTML = news_three;
	document.getElementById("ending").innerHTML = prepared;

	var toRender = document.getElementById("render");
	toRender.style.display = "block";
	if (type == 'pdf') {
		generatePDF("Wiadomości", toRender, autor)
	} else {
		generatePNG("Wiadomości", toRender, autor)
	}
	toRender.style.display = "none";
}

function submit_calendar(type) {
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
	if (type == 'pdf') {
		generatePDF("Kartka", toRender, autor)
	} else {
		generatePNG("Kartka", toRender, autor)
	}
	toRender.style.display = "none";
}

function submit_culture(type) {
	var full = document.getElementById("mainform");
	var autor = full.elements[1].value;
	var data = full.elements[2].value;
	var pronoun = full.elements[3].value;
	var news_one = full.elements[4].value;
	var news_two = full.elements[5].value;
	var news_three = full.elements[6].value;

	var end = "A kuriera przygotował" + pronoun + " " + autor + ".";

	document.getElementById("rdata").innerHTML = data;
	document.getElementById("newsone").innerHTML = news_one;
	document.getElementById("newstwo").innerHTML = news_two;
	document.getElementById("newsthree").innerHTML = news_three;
	document.getElementById("ending").innerHTML = end;

	var toRender = document.getElementById("render");
	toRender.style.display = "inline";
	if (type == 'pdf') {
		generatePDF("Kurier", toRender, autor)
	} else {
		generatePNG("Kurier", toRender, autor)
	}
	toRender.style.display = "none";
}

function submit_sport(type) {
	var full = document.getElementById("mainform");
	var autor = full.elements[1].value;
	var data = full.elements[2].value;
	var pronoun = full.elements[3].value;
	var news_one = full.elements[4].value;
	var news_two = full.elements[5].value;
	var news_three = full.elements[6].value;

	var end = "A wiadomości sportowe przygotował" + pronoun + " " + autor + ".";

	document.getElementById("rdata").innerHTML = data;
	document.getElementById("newsone").innerHTML = news_one;
	document.getElementById("newstwo").innerHTML = news_two;
	document.getElementById("newsthree").innerHTML = news_three;
	document.getElementById("ending").innerHTML = end;

	var toRender = document.getElementById("render");
	toRender.style.display = "inline";
	if (type == 'pdf') {
		generatePDF("Sportowe", toRender, autor)
	} else {
		generatePNG("Sportowe", toRender, autor)
	}
	toRender.style.display = "none";
}

function generatePDF(type, tr, autor) {
	var clonedElement = tr.cloneNode(true);
    clonedElement.style.display = "block";
	var opt = {
		filename: type + " " + autor,
		image : {type: 'jpeg', quality: 0.98},
		jsPDF: {unit: 'in', orientation: 'portrait', format: 'letter'},
		html2canvas: {scale: 2, userCORS: true}
	};
	html2pdf().set(opt).from(clonedElement).save();
	clonedElement.remove();
}

function generatePNG(type, tr, autor) {
	html2canvas(tr).then((canvas) => {
		const base64image = canvas.toDataURL("image/png");
		var anchor = document.createElement('a');
		anchor.setAttribute("href", base64image);
		anchor.setAttribute("download", "my-image.png");
		anchor.click();
		anchor.remove();
	});
}
function submit() {
	var x = document.getElementById("mainform");
	var text = "";
	var i;
	for (i = 1; i < x.length ;i++) {
		text += x.elements[i].value + "<br>";
	}
	document.getElementById("render").innerHTML = text;
}
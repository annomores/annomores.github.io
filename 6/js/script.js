"use strict";

function calculator() {
	let f1 = document.getElementsByName("price");
	let f2 = document.getElementsByName("count");
	let a = f1[0].value;
	let b = f2[0].value;
	a = parseInt(a, 10);
	b = parseInt(b, 10);
	if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
		alert("Неверные данные!");
		return false;
	}
	let r = document.getElementById("result");
	r.value = (a * b);
	return false;
}
window.addEventListener('DOMContentLoaded', function (event) {
	console.log("DOM fully loaded and parsed");
	let button = document.getElementById("final-price");
	button.addEventListener("click", calculator);
});
function calculator2() {

	let carpetCount = document.getElementsByName("carpet_count");
	let carpetType = document.getElementsByName("carpet_type");
	let calcRadio1 = document.getElementsByName("radio-carpet");
	let carpetLamp = document.getElementsByName("carpet_lamp");
	let carpeResult = document.getElementsByName('carpet_result');

	let a = parseInt(carpetCount[0].value, 10);
	if (isNaN(a) || a <= 0) {
		carpeResult[0].value = "";
		return;
	}

	let s = a;

	let b;
	if (parseInt(frogType[0].value) === 1) {
		b = 100;
	}
	else if (parseInt(frogType[0].value) === 2) {
		b = 450;
	}
	else {
		b = 300;
	}


	if (parseInt(frogType[0].value) === 3 && calcRadio1[0].checked === false && calcRadio1[1].checked === false) {
		carpeResult[0].value = "";
		return;
	}
	if (calcRadio1[0].checked === true) {
		b += 100;
	}
	else if (calcRadio1[1].checked === true) {
		b *= 2;
	}

	s = s * b;
	if (veselayaPEPE[0].checked === true) {
		s += 50;
	}

	frogResult[0].value = s;
}

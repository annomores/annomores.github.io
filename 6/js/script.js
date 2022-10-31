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

});
window.addEventListener('DOMContentLoaded', function (event) {
	//5
	console.log("DOM fully loaded and parsed");
	let button = document.getElementById("final-price");
	button.addEventListener("click", calculator);

let carpetCount = document.getElementsByName("carpet_count");
	carpetCount[0].addEventListener("change", calculator2);
	let calcRadio = document.querySelector(".calc__radio");
	let calcCheckbox = document.querySelector(".calc__checkbox");

let calcRadio1 = document.getElementsByName("radio-carpet");
	calcRadio1[0].addEventListener("change", calculator2);
	calcRadio1[1].addEventListener("change", calculator2);

	let carpetType = document.getElementsByName("frog_type");
	let carpetLamp = document.getElementsByName("veselaya_PEPE");
	veselaya_PEPE[0].addEventListener("change", calculator2);
	frogType[0].addEventListener("change", function (event) {if (parseInt(frogType[0].value) === 1) {
			calcRadio.style.display = "none";
			calcCheckbox.style.display = "none";
		}
		else if (parseInt(carpetType[0].value) === 2) {
			calcRadio.style.display = "none";
			calcCheckbox.style.display = "flex";
		}
		else {
			calcRadio.style.display = "flex";
			calcCheckbox.style.display = "none";
		}
		veselaya_PEPE[0].checked = false;
		calcRadio1[0].checked = false;
		calcRadio1[1].checked = false;
		calculator2();
	});
});

window.addEventListener('DOMContentLoaded', function (event) {


});

function calculator2() {

	let frogCount = document.getElementsByName("frog_count");
	let frogType = document.getElementsByName("frog_type");
	let calcRadio1 = document.getElementsByName("radio-frog");
	let veselaya_PEPE = document.getElementsByName("veselaya_PEPE");
	let frogResult = document.getElementsByName('frog_result');

	let a = parseInt(frogCount[0].value, 10);
	if (isNaN(a) || a <= 0) {
		frogResult[0].value = "";
		return;
	}

	let s = a;

	let b;
	if (parseInt(frogType[0].value) === 1) {
		b = 100;
	}
	else if (parseInt(carpetType[0].value) === 2) {
		b = 450;
	}
	else {
		b = 300;
	}


	if (parseInt(frogType[0].value) === 3 && calcRadio1[0].checked === false && calcRadio1[1].checked === false) {
		frogResult[0].value = "";
		return;
	}
	if (calcRadio1[0].checked === true) {
		b += 100;
	}
	else if (calcRadio1[1].checked === true) {
		b *= 2;
	}

	s = s * b;
	if (veselaya_PEPE[0].checked === true) {
		s += 50;
	}

	carpeResult[0].value = s;
}

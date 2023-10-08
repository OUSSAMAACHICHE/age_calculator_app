// DOM ELEMENTS 
const days = document.getElementById('day'),
	months = document.getElementById('month'),
	years = document.getElementById('year'),
	labels = document.querySelectorAll('form label'),
	button = document.querySelector('form button'),
	ageYears = document.getElementById('total-years'),
	ageMonths = document.getElementById('total-months'),
	ageDays = document.getElementById('total-days'),
	form = document.forms[0],
	daysError = document.querySelector('.days-input .error'),
	monthsError = document.querySelector('.months-input .error'),
	yearsError = document.querySelector('.years-input .error');

// current date
let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();
let currentDay = date.getDate();
let isValid = false;


// calculate age of days months years
function calulateAge() {
	// if years input is not empty
	if (years.value) {
		let yearsSum = Number(currentYear - years.value);

		ageYears.innerHTML = yearsSum;
	} 

	if (months.value) {


		let monthsSum = Number(currentMonth - months.value);

		if (monthsSum < 0) {
			monthsSum = monthsSum + 31;
		} else {
			monthsSum = monthsSum;
		}


		ageMonths.innerHTML = monthsSum;
	}

	if (days.value) {

		let daysSum = Number(currentDay + 1 - days.value);

		if (daysSum < 0) {
			daysSum += 31;
		} else {
			daysSum = daysSum;
		}

		ageDays.innerHTML = daysSum;

	}

}




// check days input 
days.addEventListener('input', (e) => {
	// check if days input is bigger than thirty one 
	if (+days.value > 31) {
		// add a error msg
		daysError.textContent = 'must be a valid email';
		isValid = false;
		labelsError();
	} else if (+days.value === 0 || +days.value === '') { // check if days input is empty
		daysError.textContent = 'this filed is requirde';
		isValid = false;
		labelsError();
	}
	else { // if the data is valid
		isValid = true;
		daysError.textContent = '';
		validData();
		return;
	}

});

// check months input
months.addEventListener('input', (e) => {
	// check if months input is bigger than twelve
	if (+months.value > 12) {
		monthsError.textContent = "must be a valid email";
		isValid = false;
		labelsError();
	} else if (+months.value === 0) { // if months value is empty
		monthsError.textContent = 'This field is required';
		isValid = false;
		labelsError();
	} else {
		isValid = true;
		monthsError.textContent = '';
		validData();
		return;
	}

});

// check years input
years.addEventListener('input', function (e) {
	// check if years input is bigger than twenty twenty three or less than 1900
	if (+years.value > 2023 || +years.value < 1900) {
		yearsError.textContent = 'must be a valid email';
		isValid = false;
		labelsError();
	} else if (+years.value === 0) { // if the years input is empty
		yearsError.textContent = 'This field is required';
		isValid = false;
		labelsError();
	} else {
		yearsError.textContent = '';
		isValid = true;
		validData();
		return;
	}

})

// add color to the labels 
function labelsError() {

	labels.forEach((e) => {
		e.style.color = 'hsl(0, 100%, 67%)';
	})

};
// delete color red from the labels 
function validData() {

	labels.forEach((e) => {
		e.style.color = 'hsl(0, 1%, 44%)';
	})

}

// calculate age 
form.addEventListener('submit', function (e) {
	// prevent submiting
	e.preventDefault();
	// check valid data
	if (isValid) {
		calulateAge();

	}

})


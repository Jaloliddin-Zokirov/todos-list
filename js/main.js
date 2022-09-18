let elForm = document.querySelector(`.js-form`);
let elInput = elForm.querySelector(`.js-input`);
let elList = document.querySelector(`.js-list`);
let elError = document.querySelector(`.js-error`);
let elErrorContent = document.querySelector(`.js-content`);
let elDesc = elErrorContent.querySelector(`.js-desc`);
let elX = elErrorContent.querySelector(`.js-check`);

let todos = [];

elForm.addEventListener(`submit`, function (evt) {
	evt.preventDefault();

	let elInputVal = elInput.value;
	elInput.value = ``;

	if (elInputVal == '') {
		elDesc.textContent = `Iltimos ma'lumot kiriting!`;
		elError.classList.add(`error`);
		elErrorContent.classList.add(`content`);
		intervalSecond(5);
		newText.textContent = '';
	} else if (todos.includes(elInputVal)) {
		elDesc.textContent = `Bu ma'lumot mavjud!`;
		elError.classList.add(`error`);
		elErrorContent.classList.add(`content`);
		intervalSecond(5);
		newText.textContent = '';
	} else {
		todos.push(elInputVal);
	}

	for (item of todos) {
		let newItem = document.createElement(`li`);
		newItem.classList = (`class`, `hero__item`);

		let newCheck = document.createElement(`input`);
		newCheck.classList = (`class`, `hero__check`);
		newCheck.type = `checkbox`;

		let newText = document.createElement(`p`);
		newText.classList = (`class`, `hero__text`);
		newText.textContent = elInputVal;

		let newBox = document.createElement(`div`);
		newBox.classList = (`class`, `hero__box`);

		let newEdit = document.createElement(`button`);
		newEdit.classList = (`class`, `hero__edit`);
		newEdit.textContent = `EDITOR`;

		let newBtn = document.createElement(`button`);
		newBtn.classList = (`class`, `hero__button`);
		newBtn.textContent = `DELETE`;

		newBox.append(newEdit, newBtn);
		newItem.append(newCheck, newText, newBox);
		elList.appendChild(newItem);

		for (content of todos) {
			todos.appendChild(newText);
			newText.textContent = '';
			newText.textContent = content;
		}
	}
});

elError.addEventListener(`click`, function (evt) {
	evt.preventDefault();
	elError.classList.remove(`error`);
	elErrorContent.classList.remove(`content`);
});

elX.addEventListener(`click`, function (evt) {
	evt.preventDefault();
	elError.classList.remove(`error`);
	elErrorContent.classList.remove(`content`);
});

function intervalSecond(min) {
	let second = min;
	let elSecond = elErrorContent.querySelector(`.js-second`);
	elSecond.textContent = second;

	let intervalId = setInterval(() => {
		elSecond.textContent = --second;
	}, 1000);

	setTimeout(() => {
		elError.classList.remove(`error`);
		elErrorContent.classList.remove(`content`);
		clearInterval(intervalId);
	}, second * 1000);
}

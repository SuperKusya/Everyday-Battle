const cardLists = document.querySelectorAll('.card__list'),
      addItemButton = document.querySelector('.addButton'),
      textField = document.querySelector('.addInput'),
      labelsScore = document.querySelectorAll('.card__score'),
      userCards = document.querySelectorAll('.card');

let data = localStorage.getItem('usersData') ? JSON.parse(localStorage.getItem('usersData')) : [[], []];
let usersScore = localStorage.getItem('usersScore') ? JSON.parse(localStorage.getItem('usersScore')) : [0, 0];
let isInputShown = false;
let cardItems = document.querySelectorAll('label');

// let totalList = ['1', '2'];

// data = [totalList, totalList];
let lastVisitDatе = localStorage.getItem('lastVisitDatе') || localStorage.setItem('lastVisitDatе', dateTemplate(new Date()));
let currentDate = dateTemplate(new Date());
// if (currentDate !== lastVisitDatе ) {список сбрасывается; рендер};

function dateTemplate(date) {   
    let theyear = date.getFullYear(),
        themonth = date.getMonth() + 1,
        theday = date.getDate();
    return date = `${theyear}.${themonth}.${theday}`;
}

addItemButton.addEventListener('click', function(e) {
    if(isInputShown === false) {
        textField.style.display = 'block';
        isInputShown = true;
    } else {
        renderAndSave(); //!
    }
    textField.focus();
    textField.value = '';
})

textField.addEventListener("keyup", function(event) {
    if (event.keyCode === 13 && isInputShown === true) {
        event.preventDefault();
        renderAndSave();
        textField.value = '';
    }
});


function initRender() {
    data.forEach((arrLabels, index) => {
        arrLabels.forEach((labelText) => {
            addItemToList(cardLists[index], labelText);
        })

        labelsScore[index].textContent = usersScore[index];
    })
}

function renderAndSave() {
    let isTextFieldCorrect = validateTextField();

    if (isTextFieldCorrect) {
        render(data);
        saveData(data);
    } else {
        alert('Ты не пройдешь!');
    }
}

function render(array) {
    for (let [index, cardList] of cardLists.entries()) {
        addItemToList(cardList, textField.value);
        array[index].push(textField.value);
    }
}


function addItemToList(cardList, labelText) {
    let label = document.createElement('label'),
        text = document.createElement("span");
    let input = document.createElement('input');

    label.appendChild(input);
    label.appendChild(text);
    input.setAttribute('type', 'checkbox');
    input.classList.add('card__item');
    text.textContent = labelText.trim();
    cardList.appendChild(label);
    
    label.addEventListener('click', function(e) {
        e.preventDefault();
        removeItem(label);
    })
}

function removeItem(cardItem) {
    let parent = cardItem.parentNode;
    let indexParent = [...cardLists].indexOf(parent);
    data[indexParent] = data[indexParent].filter(el => el !== cardItem.innerText);
    saveData(data);

    usersScore[indexParent] += 1;
    labelsScore[indexParent].textContent = usersScore[indexParent];
    localStorage.setItem('usersScore', JSON.stringify(usersScore));
    cardItem.remove();
}






function validateTextField() {
    if (textField.value === '' || textField.value.trim() === '') {
        return false;
    }

    return true;
}

function saveData(data) {
    localStorage.setItem('usersData', JSON.stringify(data));
}


initRender();
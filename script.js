const cardLists = document.querySelectorAll('.card__list'),
      addItemButton = document.querySelector('.addButton'),
      textField = document.querySelector('.addInput'),
      labelsScore = document.querySelectorAll('.card__score'),
      userCards = document.querySelectorAll('.card');

let data = localStorage.getItem('usersData') ? JSON.parse(localStorage.getItem('usersData')) : [[], []];
let usersScore = localStorage.getItem('usersScore') ? JSON.parse(localStorage.getItem('usersScore')) : [0, 0];
let isInputShown = false;
let cardItems = document.querySelectorAll('label');

function initRender() {
    data.forEach((arrLabels, index) => {
        arrLabels.forEach((labelText) => {
            addItemToList(cardLists[index], labelText);
        })

        labelsScore[index].textContent = usersScore[index];
    })
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

// function recalScore(indexParent) {
//     userCards.forEach(userCard) {
//         labelsScore = 
//     }
// }

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

addItemButton.addEventListener('click', function(e) {
    if(isInputShown === false) {
        textField.style.display = 'block';
        isInputShown = true;
    } else {
        renderAndSave();
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

function renderAndSave() {
    let isTextFieldCorrect = validateTextField();

    if (isTextFieldCorrect) {
        for (let [index, cardList] of cardLists.entries()) {
            addItemToList(cardList, textField.value);
            data[index].push(textField.value);
        }
        saveData(data);
    } else {
        alert('Ты не пройдешь!');
    }
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
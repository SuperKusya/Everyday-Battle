const cardLists = document.querySelectorAll('.card__list'),
      addItemButton = document.querySelector('.addButton'),
      textField = document.querySelector('.addInput');

let data = localStorage.getItem('usersData') ? JSON.parse(localStorage.getItem('usersData')) : [[], []];
let isInputShown = false;
let cardItems = document.querySelectorAll('label');

data.forEach((arrLabels, index) => {
    arrLabels.forEach((labelText) => {
        addItemToList(cardLists[index], labelText);
    })
})

function addItemToList(cardList, labelText) {
    let label = document.createElement('label'),
        text = document.createElement("span");
    let input = document.createElement('input');

    label.appendChild(input);
    label.appendChild(text);
    input.setAttribute('type', 'checkbox');
    input.classList.add('card__item');
    text.textContent = labelText;
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
    if (textField.value === '') {
        alert('Ты не пройдешь!');
    } else {
        for (let [index, cardList] of cardLists.entries()) {
            addItemToList(cardList, textField.value);
            data[index].push(textField.value);
        }
        saveData(data);
    }
    
}

function saveData(data) {
    localStorage.setItem('usersData', JSON.stringify(data));
}


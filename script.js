const cardItems = document.querySelectorAll('.card__item'),
      cardLists = document.querySelectorAll('.card__list'),
      addItemButton = document.querySelector('.addButton'),
      textField = document.querySelector('.addInput');

let data = localStorage.getItem('usersData') ? JSON.parse(localStorage.getItem('usersData')) : [[], []];

let isInputShown = false;

data.forEach((labels, index) => {
    labels.forEach((label) => {
        addItemToList(cardLists[index], label);
    })
})

function addItemToList(cardList, value) {
    let label = document.createElement('label'),
        text = document.createElement("span");
    let input = document.createElement('input');

    label.appendChild(input);
    label.appendChild(text);
    input.setAttribute('type', 'checkbox');
    input.classList.add('card__item');
    text.textContent = value;
    cardList.appendChild(label);

}


addItemButton.addEventListener('click', function(e) {
    if(isInputShown === false) {
        textField.style.display = 'block';
        isInputShown = true;
    } else {
        renderAndSave();
    }
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
    for (let [index, cardList] of cardLists.entries()) {
        addItemToList(cardList, textField.value);
        data[index].push(textField.value);
    }
    saveData(data);
}

function saveData(data) {
    localStorage.setItem('usersData', JSON.stringify(data));
}
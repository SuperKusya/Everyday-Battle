const cardItems = document.querySelectorAll('.card__item'),
      cardLists = document.querySelectorAll('.card__list'),
      addItemButton = document.querySelector('.addButton'),
      textField = document.querySelector('.addInput');

let isInputShown = false;

function addItemToList(cardList) {
    let label = document.createElement('label'),
        input = document.createElement('input'),
        text = document.createElement("span");

    label.appendChild(input);
    label.appendChild(text);
    input.setAttribute('type', 'checkbox');
    input.classList.add('card__item');
    text.textContent = textField.value;
    cardList.appendChild(label);
}


addItemButton.addEventListener('click', function(e) {
    if(isInputShown === false) {
        textField.style.display = 'block';
        isInputShown = true;
    } else {
        for (let cardList of cardLists) {
            addItemToList(cardList);
        }
        textField.value = '';
    }
})


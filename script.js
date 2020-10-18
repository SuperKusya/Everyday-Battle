const cardItems = document.querySelectorAll('card__item'),
      cardList = document.querySelector('card__list'),
      addItemButton = document.querySelector('buttonAdd');


addItemButton.addEventListener('click', function(e) {
    let label = document.createElement('label'),
        input = document.createElement('input');
    label.appendChild(input);
    cardList.appendChild(label);
    input.setAttribute('type', 'checkbox');
    input.classList.add('card__item');
})
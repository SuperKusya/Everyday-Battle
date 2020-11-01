const Validator = require('../services/validator');

class CardItem {
    text = {
        value: null,
        validator: ['isEmpty']
    };

    constructor(text){
        this.setText(text);
    }

    set(value, key) {
        if (Validator.validate(value, key.validator)) {
            key.value = value;
            return true;
        }
        return false;
    };

    setText(value) {
        this.set(value, this.text)
    }

    render() {
        const cardItem = document.createElement('div'),
              label = document.createElement('label'),
              input = document.createElement('input'),
              labelText = document.createElement("span");

        label.appendChild(input);
        cardItem.classList.add('card__item');
        input.setAttribute('type', 'checkbox');

        labelText.textContent = this.text.value;
    }
}

module.exports = CardItem;

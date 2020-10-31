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
}

module.exports = CardItem;

// cardItem = new CardItem('123');


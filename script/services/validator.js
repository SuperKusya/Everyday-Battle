class Validator {
    static validate(value, rules) {
        let self = this;
        return rules.every(function(rule) {
            return self[rule](value);
        });
    }

    static isEmpty(value) {
        if (textField.value === '' || textField.value.trim() === '') {
            return true;
        }
        return false;
    };
}

module.exports = Validator;
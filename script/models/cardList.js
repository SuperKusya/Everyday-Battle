class CardList {
    constructor(cardItems) {
       this.cardItems = cardItems;
    }

    setCardItems(cardItems) {
        this.cardItems = cardItems;
    }

    save() {
         
    }

    render() {
        const cardList = document.createElement('div');
        cardList.classList.add('card__list');
        // cardList.appendChild(this.cardItems.render());
    }
}

module.exports = CardList;
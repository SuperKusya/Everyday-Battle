class User {
    constructor(id, points, cardList, avatarURL){
        this.id = id;
        this.points = points;
        this.cardList = cardList,
        this.avatarURL = avatarURL;
    }

    render() {
        const card = document.createElement('div'),
            cardScoreLabel = document.createElement('div'),
            cardScore = document.createElement('span'),
            cardName = document.createElement('div'),
            cardImage = document.createElement('img');

            card.appendChild(cardScoreLabel);
            cardScoreLabel.appendChild(cardScore);
            card.appendChild(cardName);
            card.appendChild(cardImage);

            card.classList.add('card');
            cardScoreLabel.classList.add('card__score-label');
            cardScore.classList.add('card__score');
            cardName.classList.add('card__name');

            cardImage.setAttribute('alt', 'аватар');
            cardImage.setAttribute('src', this.avatarURL);

        card.appendChild(this.cardList.render());
        return card;
    }
}

module.exports = User;
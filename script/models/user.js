class User {
    constructor(id, points, cardList){
        this.id = id;
        this.points = points;
        this.cardList = cardList;
    }

    render() {
        // userCard = <div></div>;
        // userCard.appendChild(cardList.render());
        // return userCard;
    }
}

module.exports = User;
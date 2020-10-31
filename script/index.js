const CardItem = require('./models/cardItem');
const CardList = require('./models/cardList');
const User = require('./models/user');

let usersData = localStorage.getItem('usersData') ? JSON.parse(localStorage.getItem('usersData')) : [[], []],
    usersScore = localStorage.getItem('usersScore') ? JSON.parse(localStorage.getItem('usersScore')) : [0, 0],
    users = [];

users = usersData.map((userData, index) => {
    let cardItems = userData.map((text) => {
        return new CardItem(text);
    });
    let cardList = new CardList(cardItems);

    let points = usersScore[index];
    return new User(index, points, cardList);
});


function render(objects) {

}

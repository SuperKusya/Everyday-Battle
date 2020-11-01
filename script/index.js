const CardItem = require('./models/cardItem');
const CardList = require('./models/cardList');
const User = require('./models/user');

let usersData = localStorage.getItem('usersData') ? JSON.parse(localStorage.getItem('usersData')) : [[], []],
    usersScore = localStorage.getItem('usersScore') ? JSON.parse(localStorage.getItem('usersScore')) : [0, 0],
    users = [],
    usersAvatars = localStorage.getItem('usersAvatars') ? JSON.parse(localStorage.getItem('usersAvatars')) : ['https://i.imgur.com/fnDuX3o.png','https://i.imgur.com/7cKoHfP.png'];

users = usersData.map((userData, index) => {
    let cardItems = userData.map((text) => {
        return new CardItem(text);
    });
    let cardList = new CardList(cardItems);

    let points = usersScore[index];
    return new User(index, points, cardList, usersAvatars[index]);
});


function render(objects) {

}
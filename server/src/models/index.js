const { User } = require("./User.js");
const { Deck } = require("./Deck.js");
const { Card } = require("./Card.js");
const { Attack } = require("./Attack.js");
// import the rest of your models above

// set up the associations here

Deck.belongsTo(User);
User.hasOne(Deck);

Card.belongsTo(Deck);
Deck.hasMany(Crads);

Card.belongsToMany(Attack, {through: "card-attack"});
Attack.belongsToMany(Card, {through: "card-attack"});



// and then export them all below
module.exports = { 
    User,
    Deck,
    Card,
    Attack
}

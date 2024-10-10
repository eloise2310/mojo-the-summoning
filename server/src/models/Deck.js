// create your Deck model here

const { sequelize } = require("../db/config.js");
const { Sequelize, DataTypes } = require("sequelize");

const Deck = sequelize.define("deck", {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    xp: DataTypes.INTEGER
})


module.exports = Deck;
// create your Deck model here

const { sequelize } = require("../db/config.js");
const { Sequelize, DataTypes } = require("sequelize");

const Deck = sequelize.define("deck", {
    // id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true
    // },
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    xp: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
})


module.exports = {Deck};
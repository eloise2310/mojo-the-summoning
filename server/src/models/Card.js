// create your Card model here

const { sequelize } = require("../db/config.js");
const { Sequelize, DataTypes } = require("sequelize");

const Card = sequelize.define("card", {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    mojo: DataTypes.INTEGER,
    stamina: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING
})


module.exports = {Card};
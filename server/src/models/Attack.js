// create your Attack model here

const { sequelize } = require("../db/config.js");
const { Sequelize, DataTypes } = require("sequelize");

const Attack = sequelize.define("attack", {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    mojoCost: DataTypes.INTEGER,
    staminaCost: DataTypes.INTEGER
})


module.exports = {Attack};
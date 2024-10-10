// create your User model here

const { sequelize } = require("../db/config.js");
const { Sequelize, DataTypes } = require("sequelize");

const User = sequelize.define("user", {
    id: DataTypes.INTEGER,
    username: DataTypes.STRING
})


module.exports = User;

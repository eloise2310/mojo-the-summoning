// create your User model here

const { sequelize } = require("../db/config.js");
const { Sequelize, DataTypes, Model } = require("sequelize");

const User = sequelize.define("user", {
    // id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true
    // },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    } 
})


module.exports = {User};

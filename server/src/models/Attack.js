// create your Attack model here
const { sequelize } = require("../db/config.js");
const { DataTypes } = require("sequelize");

const Attack = sequelize.define("attack", {
    // id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,  
    //     autoIncrement: true  
    // },
    title: {
        type: DataTypes.STRING,
        allowNull: false  
    },
    mojoCost: {
        type: DataTypes.INTEGER,
        allowNull: false  
    },
    staminaCost: {
        type: DataTypes.INTEGER,
        allowNull: false  
    }
});

module.exports = { Attack };

// create your Card model here

const { sequelize } = require("../db/config.js");
const { DataTypes } = require("sequelize");

const Card = sequelize.define("card", {
    // id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,  // Mark as primary key
    //     autoIncrement: true  // Automatically increment the id
    // },
    name: {
        type: DataTypes.STRING,
        allowNull: false  // Optional: prevent null names
    },
    mojo: {
        type: DataTypes.INTEGER,
        allowNull: false  // Optional: prevent null mojo
    },
    stamina: {
        type: DataTypes.INTEGER,
        allowNull: false  // Optional: prevent null stamina
    },
    imgUrl: {
        type: DataTypes.STRING,
        allowNull: true  // Optional: imgUrl can be null
    }
});

module.exports = { Card };

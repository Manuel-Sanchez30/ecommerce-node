const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Purchase = sequelize.define('purchase', {
    quantity: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //ptoductIde,
    //userId
});

module.exports = Purchase;
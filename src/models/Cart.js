const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Cart = sequelize.define('modelName', {

    
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    //userId
    //productID
});

module.exports = Cart;
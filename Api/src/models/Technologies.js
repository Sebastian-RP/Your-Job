const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('technologies', {
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
}
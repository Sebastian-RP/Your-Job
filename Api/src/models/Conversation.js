const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('conversation', {
        members:{
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false,
        },
        text: {
            type: DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.JSONB)),
            allowNull: true,
        },
    });
}
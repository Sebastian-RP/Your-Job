const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('technology', {
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM(["active", "disabled"]),
            defaultValue: "active",
          },
    });
}
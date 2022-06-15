const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('userPost', {
        titlePost: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: { 
            type: DataTypes.INTEGER
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        status: { //borrado logico
            type: DataTypes.ENUM(["active", "disabled"]),
            defaultValue: "active"
        }
    })
}
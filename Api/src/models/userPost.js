const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('userPost', {
        titlePost: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: { 
            type: DataTypes.INTEGER //con el id podemos consultar el nombre del usuario 
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    })
}
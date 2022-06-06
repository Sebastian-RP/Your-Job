const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('companyPost', {
        technologiesId:{
            type: DataTypes.ARRAY(DataTypes.STRING)
        },
        experience:{
            type: DataTypes.ENUM(["trainig", "junior", "semi-senior", "senior"]) //concordar los termino a usar
        },
        typeof_contract:{
            type: DataTypes.ENUM(["por labor", "temporal", "termino fijo", "termino indefinido"])
        },
        companyId: { 
            type: DataTypes.INTEGER //con el id podemos consultar el nombre de la empresa 
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        min_salary: {
            type: DataTypes.INTEGER,
        },
        max_salary:{ // rango salarial: min_salary - max_salary
            type: DataTypes.INTEGER
        },
        modality:{
            type: DataTypes.ENUM("remoto", "presencial")
        }
    })
}
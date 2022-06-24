const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("companyPost", {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    titlePost: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    technologiesId: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    experience: {
      type: DataTypes.ENUM(["Training", "Junior", "Semi-Senior", "Senior"]), //concordar los termino a usar
    },
    typeof_contract: {
      type: DataTypes.ENUM(["Seasonal", "Indeterminate", "termino fijo", "termino indefinido"]),
    },
    companyId: {
      type: DataTypes.UUID, //con el id podemos consultar el nombre de la empresa
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    min_salary: {
      type: DataTypes.INTEGER,
    },
    max_salary: {
      // rango salarial: min_salary - max_salary
      type: DataTypes.INTEGER,
    },
    modality: {
      type: DataTypes.ENUM(["Remote", "Presential"]),
    },
    status: {
      type: DataTypes.ENUM(["active", "disabled"]),
      defaultValue: "active",
    },
  });
};

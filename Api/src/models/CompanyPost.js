const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("companyPost", {
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
      type: DataTypes.ENUM([
        "Seasonal",
        "Indeterminate",
        "termino fijo",
        "termino indefinido",
      ]),
    },
    companyId: {
      type: DataTypes.UUID, //con el id podemos consultar el nombre de la empresa
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

  sequelize.define("postulates", {
    name: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
  });
};

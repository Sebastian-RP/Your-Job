const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("user", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employment_status: {
      type: DataTypes.ENUM(["Employee", "Unemployed"]), //tema a consultar sobre el idioma y los valores
    },
    age: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
    description: {
      type: DataTypes.TEXT,
    },
    ocupation: {
      type: DataTypes.STRING,
      defaultValue: "This user works at"
    },
    technologiesName: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    nationality: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
    cv: {
      type: DataTypes.STRING,
    },
    premium: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.ENUM(["active", "disabled"]),
      defaultValue: "active",
    },
    Account: {
      type: DataTypes.ENUM(["User", "Company", "Admin", "SuperAdmin"]),
      defaultValue: "User",
    },
  });
};

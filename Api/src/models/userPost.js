const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("userPost", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    titlePost: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      //borrado logico
      type: DataTypes.ENUM(["active", "disabled"]),
      defaultValue: "active",
    },
  });
};

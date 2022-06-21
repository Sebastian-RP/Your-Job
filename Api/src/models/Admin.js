const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("admin", {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Account: {
        type: DataTypes.ENUM("admin"),
        defaultValue: "admin"
    }
  });
};

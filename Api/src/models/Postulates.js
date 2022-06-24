const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("postulates", {
    name: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
    postId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  });
};

const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "NotificationPosts",
    {
      user: { type: DataTypes.STRING, allowNull: false },
      title: { type: DataTypes.STRING, allowNull: false},
    },
    { timestamps: true }
  );
};

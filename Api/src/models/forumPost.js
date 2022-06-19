const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "forumPost",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      user: { type: DataTypes.STRING, allowNull: false },
      likes: { type: DataTypes.INTEGER, defaultValue: 0 },
      dislikes: { type: DataTypes.INTEGER, defaultValue: 0 },
      comments: { type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: [] },
    },
    { timestamps: true }
  );
};

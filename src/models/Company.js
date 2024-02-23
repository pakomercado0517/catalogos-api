const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("company", {
    name: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
  });
};

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("catalogo", {
    name: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
  });
};

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "catalogo",
    {
      name: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      url: {
        type: DataTypes.STRING,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "otros",
      },
    },
    {
      indexes: [
        { name: "idx_catalogos_company_id", fields: ["companyId"] },
        { name: "idx_catalogos_category", fields: ["category"] },
      ],
    }
  );
};

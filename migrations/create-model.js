// create-model.js

const { Sequelize } = require("sequelize");

module.exports = {
    up: (queryInterface, Sequelize) =>
    queryInterface.createTable("Models", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.BIGINT,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        brandId: {
            type: Sequelize.INTEGER,
            onDelete: "CASCADE",
            references: {
                model: "Brands",
                key: "id",
                as: "brandId",
            },
        },
        created_at: {
            allowNull: false,
            type: Sequelize.DataTypes.DATE(6),
        },
        updated_at: {
            allowNull: false,
            type: Sequelize.DataTypes.DATE(6),
        },
    }),
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable("Brands"),
}
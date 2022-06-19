// create-model.js

const { Sequelize } = require("sequelize");

module.exports = {
    up: (queryInterface, Sequelize) =>
    queryInterface.createTable("models", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.BIGINT,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        brand_id: {
            type: Sequelize.INTEGER,
            onDelete: "CASCADE",
            references: {
                model: "brands",
                key: "id",
                as: "brand_id",
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
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable("models"),
}
// brand-migration.js

const { Sequelize } = require("sequelize/types");

module.exports = {
    up: (queryInterface, Sequelize) =>
    queryInterface.createTable("Brands", {
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
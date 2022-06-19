// create-behicle.js

const { Sequelize } = require("sequelize");

module.exports = {
    up: (queryInterface, Sequelize) =>
    queryInterface.createTable("vehicles", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.BIGINT,
        },
        legal_identifier: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        frame_size: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        status: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        modelId: {
            type: Sequelize.INTEGER,
            onDelete: "CASCADE",
            references: {
                model: "models",
                key: "id",
                as: "model_id",
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
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable("vehicles"),
}
// VEHICLE schema

module.exports = (sequelize, Datatypes) => {
    let Vehicle = sequelize.define("vehicle", {
        legal_identifier: Datatypes.STRING,
        name: Datatypes.STRING,
        frame_size: Datatypes.INTEGER,
        status: Datatypes.INTEGER,
        model_id: Datatypes.BIGINT
    });

    Vehicle.associate = function(models) {
        Vehicle.belongsTo(models.Model, {
            onDelete: "CASCADE",
            foreignKey: "model_id"
        });
    };

    return Vehicle;
}

// Status field missing enum values!
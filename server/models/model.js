// (Vehicle) MODEL schema

module.exports = (sequelize, Datatypes) => {
    let Model = sequelize.define("Model", {
        name: Datatypes.STRING,
        brand_id: Datatypes.BIGINT
    });

    Model.associate = function(models) {
        Model.belongsTo(models.Brand, {
            onDelete: "CASCADE",
            foreignKey: "brandId"
        });

        Model.hasMany(models.Vehicle, {
            foreignKey: "modelId",
            as: "vehicles"
        });
    };

    return Model;
}


// (Vehicle) MODEL schema

module.exports = (sequelize, Datatypes) => {
    let Model = sequelize.define("model", {
        name: Datatypes.STRING,
        brand_id: Datatypes.BIGINT
    });

    Model.associate = function(models) {
        Model.belongsTo(models.Brand, {
            onDelete: "CASCADE",
            foreignKey: "brand_id"
        });

        Model.hasMany(models.Vehicle, {
            foreignKey: "model_id",
            as: "vehicles"
        });
    };

    return Model;
}


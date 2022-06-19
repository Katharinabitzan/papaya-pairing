// BRAND schema

module.exports = (sequelize, Datatypes) => {
    let Brand = sequelize.define("brand", {
        name: Datatypes.STRING
    });

    Brand.associate = function(models) {
        Brand.hasMany(models.Model, {
            foreignKey: "brand_id",
            as: "models"
        });
    };

    return Brand;
}
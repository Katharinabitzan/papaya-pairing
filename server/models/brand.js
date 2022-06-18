// BRAND schema

module.exports = (sequelize, Datatypes) => {
    let Brand = sequelize.define("Brand", {
        name: Datatypes.STRING
    });

    Brand.associate = function(models) {
        Brand.hasMany(models.Model, {
            foreignKey: "brandId",
            as: "models"
        });
    };

    return Brand;
}
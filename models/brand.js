// BRAND schema

const sequelize = require("sequelize");

module.exports = (sequelize, Datatypes) => {
    let Brand = sequelize.define("Brand", {
        name: Datatypes.STRING
    })

    Brand.associate = function(models) {
        Brand.hasMany(models.Models, {
            foreignKey: "brandId",
            as: "models",
        })
    }
    return Brand
}
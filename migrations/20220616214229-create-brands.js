'use strict';
const fs = require("fs");
const path = require("path");
const readFile = require("util").promisify(fs.readFile);

module.exports = {
  up: async(queryInterface) => {
    try {
      const queryPath = path.resolve(
        __dirname,
        "../queries/create-brands.sql"
      );
      const query = await readFile(queryPath, "utf8");
      return await queryInterface.sequelize.query(query);
    }    catch (err) {
      console.error("Unable to execute script to create brands table: ", err)
    }
  },

  down: async(queryInterface) => {
    try {
      const queryPath = path.resolve(__dirname, "../queries/drop-brands.sql");
      const query = await readFile(queryPath, "utf8");
      return await queryInterface.sequelize.query(query);
    } catch (err) {
      console.error("Unable to drop table brands: ", err);
    }
  },
};

'use strict';

const Sequelize = require('sequelize');
const DataTypes = require('sequelize/lib/data-types')
const Brand = require('../models/brand')

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
let rndInt = randomIntFromInterval(0, 3);

module.exports = {
  async up (queryInterface, Sequelize) {

    const brandsAll = await queryInterface.sequelize.query(
      `SELECT * from BRANDS;`
    );
    const brands = brandsAll[0];

    await queryInterface.bulkInsert('models', [
      { 
        name: 'Cx 1', 
        brand_id: brands[rndInt].id,
        created_at: new Date(),
        updated_at: new Date()
      }, 
      { 
        name: 'PP 50', 
        brand_id: brands[rndInt].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      { 
        name: 'L99', 
        brand_id: brands[rndInt].id,
        created_at: new Date(),
        updated_at: new Date() 
      },
      { 
        name: '42', 
        brand_id: brands[rndInt].id,
        created_at: new Date(),
        updated_at: new Date() 
      },
      { 
        name: 'Best', 
        brand_id: brands[rndInt].id,
        created_at: new Date(),
        updated_at: new Date() 
      },
      { 
        name: 'Lower', 
        brand_id: brands[rndInt].id,
        created_at: new Date(),
        updated_at: new Date() 
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('models', null, {});
  }
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Brands', [{ name: 'Honda' }, { name: 'Yamaha' }, { name: 'Zoomo' }, { name: 'nothng' }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Brands', null, {});
  }
};

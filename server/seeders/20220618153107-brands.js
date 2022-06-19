'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('brands', [
       { 
       name: 'Honda', 
       created_at: new Date(),
       updated_at: new Date()
      }, 
      { 
        name: 'Yamaha',
        created_at: new Date(),
        updated_at: new Date()
      }, 
      { 
        name: 'Zoomo',
        created_at: new Date(),
        updated_at: new Date()
      }, 
      { 
        name: 'nothng',
        created_at: new Date(),
        updated_at: new Date()
       }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('brands', null, {});
  }
};

'use strict';

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

module.exports = {
  async up (queryInterface, Sequelize) {
   
    const modelsAll = await queryInterface.sequelize.query(
      `SELECT * from MODELS;`
    );
    const models = modelsAll[0];

    const vehiclesArray = [];

    for (let i = 0; i < 49; i++) {
      let vehicle = { 
        name: `Vehicle #${i}`,
        legal_identifier: i.toString(),
        frame_size: randomIntFromInterval(0, 100),
        status: randomIntFromInterval(0, 2),
        model_id: models[randomIntFromInterval(0, 5)].id,
        created_at: new Date(),
        updated_at: new Date()
      };
      vehiclesArray.push(vehicle);
    };


    await queryInterface.bulkInsert('vehicles', vehiclesArray, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('vehicles', null, {});
  }
};

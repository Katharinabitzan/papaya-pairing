// index.js

// const vehicleController = require('../controller/vehicle');
// const modelController = require('../controller/model');
// const brandController = require('../controller/brand');


module.exports = app => {
    app.get("/", (req, res) => {
        res.status(200).send({
            data: "Welcome to the Papaya Pairing API"
        })
    })
}
// vehicle.js controller

const Vehicle = require("../models").Vehicle
module.exports = {
    async getAllVehicles(req, res) {
        try {
            const vehicleCollection = await Vehicle.find({})

            res.status(201).send(vehicleCollection)
        } catch (e) {
            console.log(e)

            res.status(500).send(e)
        }
    },

    async create(req, res) {
        try {
            const vehicleCollection = await Vehicle.create({
                name: req.body.name,
            })

            res.status(201).send(vehicleCollection)
        } catch (e) {
            console.log(e)

            res.status(500).send(e)
        }
    },

    async update(req, res) {
        try {
            const vehicleCollection = await Vehicle.find({
                id: req.params.vehicleId,
            })
            if (vehicleCollection) {
                const updatedVehicle = await Vehicle.update({
                    id: req.body.name,
                })

                res.status(201).send(updatedVehicle)
            } else {
                res.status(404).send(`Vehicle: ${req.body.name} Not Found`)
            }
        } catch (e) {
                console.log(e)
                res.status(500).send(e)
            }
    },
}
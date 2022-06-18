// model.js controller

const Model = require('../models/model');
const Brand = require('../models/brand');

module.exports = {
    async getAllModels(req, res) {
        try {
            const modelCollection = await Model.find({})

            res.status(201).send(modelCollection)
        } catch (e) {
            console.log(e)

            res.status(500).send(e)
        }
    },

    async getAllModelsOfBrand(req, res) {
        try {
            const brandCollection = await Brand.find({
                id: req.params.brandId,
            });

            if (brandCollection) {
                const modelCollection = await Model.find({
                    brandId: req.params.brandId,
                })

                res.status(201).send(modelCollection)
            } else {
                res.status(404).send("Brand not found")
            }
            
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },

    async createModel(req, res) {
        try {
            const model = await Model.create({
                name: req.body.name,
                brandId: req.body.brandId,
            });
            res.status(201).send(model)

        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },

    async update(req, res) {
        try {
            const modelCollection = await Model.find({
                id: req.params.modelId,
            });

            if (modelCollection) {
                const updatedModel = await Model.update({
                    name: req.body.name,
                })

                res.status(201).send(updatedModel)
            } else {
                res.status(404).send(`Model: ${req.body.name} Not Found`)
            }
        } catch (e) {
                console.log(e)
                res.status(400).send(e)
            }
    }
}
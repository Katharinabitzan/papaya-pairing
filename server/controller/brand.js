// brand.js controller

const Brand = require("../models").Brand

module.exports = {
    async getAllBrands(req, res) {
        try {
            const brandCollection = await Brand.find({})

            res.status(201).send(brandCollection)
        } catch (e) {
            console.log(e)

            res.status(500).send(e)
        }
    },

    async create(req, res) {
        try {
            const brandCollection = await Brand.create({
                name: req.body.name,
            })

            res.status(201).send(brandCollection)
        } catch (e) {
            console.log(e)

            res.status(500).send(e)
        }
    },

    async update(req, res) {
        try {
            const brandCollection = await Brand.find({
                id: req.params.brandId,
            })
            if (brandCollection) {
                const updatedBrand = await Brand.update({
                    name: req.body.name,
                })

                res.status(201).send(updatedBrand)
            } else {
                res.status(404).send(`Brand: ${req.body.name} Not Found`)
            }
        } catch (e) {
                console.log(e)
                res.status(400).send(e)
            }
    },
}
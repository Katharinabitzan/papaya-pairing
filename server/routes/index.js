// index.js

const vehicleController = require('../controller/vehicle');
const modelController = require('../controller/model');
const brandController = require('../controller/brand');


module.exports = app => {
    app.get("/", (req, res) => {
        res.status(200).send({
            data: "Welcome to the Papaya Pairing API"
        })
    })

    app.get("/brands", brandController.getAllBrands);
    app.post("/brand/create", brandController.create);
    app.put("/brand/:brandId", brandController.update);
    // app.get("/v1/posts", modelController.getAllPostsOfUser);
    // app.post("/api/post/create", modelController.createPost);
    // app.put("/api/:postId", modelController.update);
}
const express = require("express");
const app = express();
// const Associations = require('./server/models/associations')();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

require("./server/routes")(app);

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`)
})

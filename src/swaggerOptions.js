const path = require("path");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Visitar API",
            version: '1.0.0'
        },
    },
    apis: [path.join(__dirname, "./routes/*js")]
}

module.exports = options
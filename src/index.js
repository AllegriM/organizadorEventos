const app = require('./app') 
const { connectToDatabase } = require('./controllers/user.controller.js') 
const dotenv = require('dotenv')

dotenv.config();


const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
    console.log(`Server connected and running on ${PORT} `)
    connectToDatabase()
})

server.on('error', error => {
    console.error(`Error: ${error}`)
})
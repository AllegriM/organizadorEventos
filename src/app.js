const express = require('express') 
const cors = require('cors') 
const morgan = require('morgan') 
const { urlencoded } = require('express') 
const router = require('./routes/routes.app.js') 
const swaggerUI = require('swagger-ui-express') 
const swaggerJsDoc = require('swagger-jsdoc') 
const options = require('./swaggerOptions.js') 
const eventsRoutes = require('./routes/eventos/eventos.routes')

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(urlencoded({extended: true}))
app.use(express.json())

const specs = swaggerJsDoc(options)

app.use(eventsRoutes)
app.use('/', (req, res) => {
    res.send('Hello World')
})
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))


module.exports =  app
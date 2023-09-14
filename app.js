require("dotenv").config()

// async errors
require('express-async-error')


//express
const express = require("express")
const app = express()

// middleware
const errorHandlerMiddleware = require('./middleware/error-handler')
const notFoundMiddleware = require('./middleware/not-found')

const connectDB = require('./db/connect')

const personrouter = require('./routes/person')

app.use(express.json());

// Routes
app.use('/api',personrouter)




app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware) 





const port = process.env.PORT || 3000

const start = async () => {
    try {
        // connect Database
        await connectDB(  process.env.MONGO_URI  )

        app.listen( port ,() => {
            console.log(`App is listening on port ${port}`);
        } )
    } catch (error) {
        console.log(error);
    }
}

start()





 
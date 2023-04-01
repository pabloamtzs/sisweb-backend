const express = require('express') // Import express library
const morgan = require('morgan') // Import morgan library
import apiRouter from './src/routes' // Import api router

const app = express() // Create express app 
const port = 3000 // Define port

app.use(morgan('dev')) // Use morgan library
app.use(express.json()) // Use express json parser
app.use(apiRouter) // Use api router

// req: request object from client
// res: response object to client
// =>: arrow function
// callback function
/*
app.get('/', (req, res) => { // Define route for root path
    res.send('Hello World!') // Send response
})
*/
app.listen(port, () => { // Start server on port
    console.log(`Example app listening on port ${port}`) // Log message
})

// npm run dev - run server with nodemon
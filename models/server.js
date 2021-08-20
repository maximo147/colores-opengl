const express = require('express')
const cors = require('cors')


class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        //Middleware
        this.middlewares()

    }

    middlewares() {
        //Cors
        this.app.use(cors())
        //Directorio publico
        this.app.use(express.static('public'))
        this.app.use(express.static('public/styles'))
    }

    listen() {
        this.app.listen(this.port, () => console.log('Puerto', this.port))
    }

}

module.exports = Server
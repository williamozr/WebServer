const express = require('express')
const cors = require('cors')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.middleware();
        this.routes();


    }
    middleware(){
        this.app.use(express.static('public'));
        this.app.use(cors());
        //lectura y parseo del body
        this.app.use(express.json())
    }


    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })
    }
    
    routes(){
        this.app.use('/api/user', require('../routes/usuario'))
    }
}



module.exports = Server;
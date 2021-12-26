import earnings from '../routes/earnings'
import projects from '../routes/projects'
import details from '../routes/details'

import express from 'express'
import cors from 'cors'

export default class Express {

    private express: express.Application;
    private port: number

    constructor(port: number) {

        console.log('[express] Express iniciado com sucesso.')

        this.port = port
        this.express = express()
    
        this.listen()
        this.middlewares()
        this.routes()

    }

    private listen() {

        this.express.listen(this.port, () => console.log(`[express] Servidor iniciado na porta ${this.port}`))

    }

    private middlewares() {
        
        this.express.use(express.json())
        this.express.use('/videos', express.static('uploads/'))
        this.express.use(cors())

    }

    private routes() {

        this.express.use('/projects', projects)
        this.express.use('/earnings', earnings)
        this.express.use('/details', details)

    }

    
}
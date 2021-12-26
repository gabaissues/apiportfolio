"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _earnings = require('../routes/earnings'); var _earnings2 = _interopRequireDefault(_earnings);
var _projects = require('../routes/projects'); var _projects2 = _interopRequireDefault(_projects);
var _details = require('../routes/details'); var _details2 = _interopRequireDefault(_details);

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

 class Express {

    
    

    constructor(port) {

        console.log('[express] Express iniciado com sucesso.')

        this.port = port
        this.express = _express2.default.call(void 0, )
    
        this.listen()
        this.middlewares()
        this.routes()

    }

     listen() {

        this.express.listen(this.port, () => console.log(`[express] Servidor iniciado na porta ${this.port}`))

    }

     middlewares() {
        
        this.express.use(_express2.default.json())
        this.express.use('/videos', _express2.default.static('uploads/'))
        this.express.use(_cors2.default.call(void 0, ))

    }

     routes() {

        this.express.use('/projects', _projects2.default)
        this.express.use('/earnings', _earnings2.default)
        this.express.use('/details', _details2.default)

    }

    
} exports.default = Express;
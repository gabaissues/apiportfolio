"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);

var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);

var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');
const router = _express.Router.call(void 0, )

var _projects = require('../schema/projects'); var _projects2 = _interopRequireDefault(_projects);
const Project = _mongoose2.default.model('Projects', _projects2.default)

const upload = _multer2.default.call(void 0, { dest: 'uploads/' })

router.get('/', async (req, res) => {

    const projects = await Project.find()

    res.json({
        sucess: true,
        projects: projects
    })

})

router.post('/create', upload.single('file'), async(req, res) => {

    if(!req.body.name || !req.body.description || !req.body.url || !req.body.time) return res.status(317).send({ sucess: false, message: 'Não consegui encontrar o contéudo do BODY...'})
    _fs2.default.renameSync(req.file.path, `uploads/${req.body.name}.mp4`)

    new Project({
        name: req.body.name,
        description: req.body.description,
        time: req.body.time,
        url: req.body.url
    }).save().then(() => res.status(201).send({ sucess: true, message: 'Projeto criado com sucesso' })).catch(err => res.status(501).send({ sucess: false, message: `${err}` }))

})

exports. default = router;
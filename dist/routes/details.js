"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');
const router = _express.Router.call(void 0, )

var _projects = require('../schema/projects'); var _projects2 = _interopRequireDefault(_projects);
const Projects = _mongoose2.default.model('Projects', _projects2.default)

var _details = require('../schema/details'); var _details2 = _interopRequireDefault(_details);
const Details = _mongoose2.default.model('Details', _details2.default)

router.get('/', async (req, res) => {

    const detail = await Details.findOne({ type: 'view'})
    const project = await Projects.find()

    if(!detail) {

        res.json({
            sucess: true,
            details: {
                clicks: 0,
                projects: project.length
            }
        })

    } else {

        res.json({
            sucess: true,
            details: {
                clicks: detail.number,
                projects: project.length
            }
        })

    }
    
})

router.get('/add-view', async (req, res) => {

    const detail = await Details.findOne({ type: 'view' })
    if(!detail) {

        new Details({
            type: 'view',
            number: 1
        }).save().then(() => res.status(201).send({ sucess: true, message: 'DETAIL criado com sucesso'})).catch(err => res.status(501).send({ sucess: false, message: `${err}`}))

    } else {

        await Details.findOneAndUpdate({ type: 'view'}, { number: detail.number+1 })
        res.status(200).send({
            sucess: true,
            message: 'DETAIL atualizado com sucesso.'
        })

    }
})

exports. default = router
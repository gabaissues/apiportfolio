"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');
const router = _express.Router.call(void 0, )

var _earn = require('../schema/earn'); var _earn2 = _interopRequireDefault(_earn);
const Earn = _mongoose2.default.model('Earns', _earn2.default)

router.get('/', async (req, res) => {

    const earns = await Earn.find()
    res.status(200).json({
        sucess: true,
        earns: earns
    })

})

router.post('/create', (req, res) => {

    if(!req.body.name || !req.body.value || !req.body.type) return res.status(317).send({ sucess: false, message: 'Não consegui encontrar o contéudo do BODY...'})
    new Earn({
        name: req.body.name,
        value: req.body.value,
        type: req.body.type
    }).save().then(() => res.status(201).send({ sucess: true, message: 'EARN criado com sucesso.'})).catch(err => res.status(501).send({ sucess: false, message: `${err}`}))

})

exports. default = router;
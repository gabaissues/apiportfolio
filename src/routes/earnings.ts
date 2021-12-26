import mongoose from 'mongoose'

import { Router } from 'express'
const router = Router()

import earn from '../schema/earn'
const Earn = mongoose.model('Earns', earn)

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

export default router;
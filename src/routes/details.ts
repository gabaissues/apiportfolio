import mongoose from 'mongoose'

import { Router } from 'express'
const router = Router()

import projects from '../schema/projects'
const Projects = mongoose.model('Projects', projects)

import details from '../schema/details'
const Details = mongoose.model('Details', details)

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

export default router
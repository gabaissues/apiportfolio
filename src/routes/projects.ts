import fs from 'fs'

import multer from 'multer'

import mongoose from 'mongoose'

import { Router } from 'express'
const router = Router()

import project from '../schema/projects'
const Project = mongoose.model('Projects', project)

const upload = multer({ dest: 'uploads/' })

router.get('/', async (req, res) => {

    const projects = await Project.find()

    res.json({
        sucess: true,
        projects: projects
    })

})

router.get('/:name', async(req, res) => {

    const projects = await Project.findOne({ name: req.params.name })
    if(!projects) return res.status(404).send({
        sucess: false,
        message: 'Houve um erro ao encontrar o projeto.'
    })

    res.status(200).send({
        sucess: true,
        project: projects
    })

})

router.post('/create', upload.single('file'), async(req, res) => {

    if(!req.body.name || !req.body.description || !req.body.url || !req.body.time) return res.status(317).send({ sucess: false, message: 'Não consegui encontrar o contéudo do BODY...'})
    fs.renameSync(req.file.path, `uploads/${req.body.name}.mp4`)

    new Project({
        name: req.body.name,
        description: req.body.description,
        time: req.body.time,
        url: req.body.url
    }).save().then(() => res.status(201).send({ sucess: true, message: 'Projeto criado com sucesso' })).catch(err => res.status(501).send({ sucess: false, message: `${err}` }))

})

export default router;
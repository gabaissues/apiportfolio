import mongoose, { Schema } from 'mongoose'

interface Project {
    name: string,
    description: string,
    time: string,
    url: string
}

export default new Schema<Project>({
    name: String,
    description: String,
    time: String,
    url: String
})
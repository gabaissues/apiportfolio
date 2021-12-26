import { Schema } from 'mongoose'

interface Earn {
    name: string,
    value: number,
    type: string
}

export default new Schema<Earn>({
    name: String,
    value: Number,
    type: String
})
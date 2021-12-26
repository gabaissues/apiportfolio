import { Schema } from 'mongoose'

interface Detail {
    type: string,
    number: number
}

export default new Schema<Detail>({
    type: String,
    number: Number
})
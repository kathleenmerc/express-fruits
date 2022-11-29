const mongoose = require('mongoose')

//create schema (schema is blueprint of what your data looks like in your document):

const vegetableSchema = new mongoose.Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
    readyToEat: Boolean
},
{
    timestamps: true
})

const Vegetable = mongoose.model("Vegetable", vegetableSchema)

module.exports = Vegetable
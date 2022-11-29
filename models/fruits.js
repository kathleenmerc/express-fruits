const mongoose = require('mongoose')

//create schema (schema is blueprint of what your data looks like in your document):

const fruitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
    readyToEat: Boolean
},
{
    timestamps: true
})

//this is creating the model for our schema:
const Fruit = mongoose.model("Fruit", fruitSchema)

module.exports = Fruit
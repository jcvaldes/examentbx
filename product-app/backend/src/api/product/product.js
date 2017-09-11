const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
  description: {type: String, required: true, unique: true},
  qty: {type: Number, required: true},
  price: {type: Number, required: true},
  createAt: {type: Date, default: Date.now}
})

module.exports = restful.model('Todo', todoSchema)
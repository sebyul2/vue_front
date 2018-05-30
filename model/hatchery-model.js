'use strict'

const mongoose = require('mongoose')
const collectionName = 'hatchery'

let hatcherySchema = new mongoose.Schema({
  hatchery_id: {type : String, required: true},
  name: {type : String, required: true},
  total_quantity: {type : Number, default: 0}
}, {
  collection: collectionName
})

module.exports = mongoose.model('hatchery', hatcherySchema)
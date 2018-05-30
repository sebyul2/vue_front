'use strict'

const mongoose = require('mongoose')
const collectionName = 'insert'

let insertListSchema = new mongoose.Schema({
  user_id: {type : String, required: true},
  house_number: {type : Number, required: true},
  quantity: {type : Number, required: true},
}, {
  collection: collectionName
})

module.exports = mongoose.model('insert', insertListSchema)
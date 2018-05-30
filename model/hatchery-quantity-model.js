'use strict'

const mongoose = require('mongoose')
const collectionName = 'hatchery_quantity'

let hatcheryQuantitySchema = new mongoose.Schema({
  // '2018-05-05'
  date: {type : String, required: true},
  // 입력 : 1, 출력 : 2
  type: {type : Number, required: true},
  user_id: {type : String},
  // 예산 : 1, 아산 : 2
  hatchery_id: {type : String, required: true},
  name: {type : String, required: true},
  quantity: {type : Number, default: 0},
  confirm: {type : Number, default: 1}
}, {
  collection: collectionName
})

module.exports = mongoose.model('hatchery_quantity', hatcheryQuantitySchema)
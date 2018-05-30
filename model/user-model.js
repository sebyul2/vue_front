'use strict'

const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const collectionName = 'user'

let userSchema = new mongoose.Schema({
  email: {type : String, required: true},
  sequence: {type : Number, default: 0},
  nickname: {type : String},
  password: {type : String},
  registration_number: {type : String},
  name: {type : String},
  phone: {type : String},
  mobile: {type : String},
  address: {type : String},
  grade: {type : String},
  rest: {type : String},
  total_quantity: {type : Number, default: 0},
  latest_quantity: {type : Number, default: 0},
  // square_meter, pyeong, house_type, flooring_type, car, feeding, watering
  house: [new mongoose.Schema({
    house_number: {type : Number, required: true},
    square_meter: {type : Number, default: 0},
    pyeong: {type : Number, default: 0},
    house_type: {type : String},
    flooring_type: {type : String},
    car: {type : String},
    feeding: {type : String},
    watering: {type : String}
  }, {_id: false})],
  insert_house: {type : Array}, // apiDoc 반영 안됨
  career : {type : String},
  non_antibiotic_career: {type : String},
  haccp: {type : String},
  status: {type : String}
}, {
  collection: collectionName
})

userSchema.plugin(AutoIncrement, {inc_field: 'sequence'});

module.exports = mongoose.model('user', userSchema)
'use strict'

const userModel = require('../model/user-model')
const insertModel = require('../model/insert-model')
const wrapApi = require('../common/wrap-api')
const moment = require('moment')

exports.setInsertHouse = (req, res, next) => {
  (async function () {
    try {
      const userId = req.params.id
      let insertHouse = req.body.insertHouse || req.query.insertHouse
      try {
        insertHouse = JSON.parse(insertHouse)
      } catch (e) {}
      console.log(insertHouse)
      const user = await userModel.findOneAndUpdate(
        { _id: userId },
        {
          'insert_house': insertHouse,
          'status': 5,
        },
        { new: true }
      )
      res.json(wrapApi({status: user.status}))
    } catch (err) {
      res.json(wrapApi(null, '10001', err))
    }
  })()
}

exports.setInsert = (req, res, next) => {
  (async function () {
    try {
      const userId = req.params.id
      let insertList = req.body.insertList
      
      try {
        insertList = JSON.parse(insertList)
      } catch (e) {}
      const updateList = insertList.map(item => {    
        return {
          user_id: userId,
          house_number: item.houseNumber,
          quantity: item.quantity,
        }
      })
      const insert = await insertModel.create(updateList)
      const user = await userModel.findOneAndUpdate(
        { _id: userId },
        {'status': 6},
        { new: true }
      )
      res.json(wrapApi())
    } catch (err) {
      res.json(wrapApi(null, '20002', err))
    }
  })()
}

exports.getInsert = (req, res, next) => {
  (async function () {
    try {

      const userId = req.params.id
      const user = await insertModel.find({
        user_id: userId
      })
      res.json(wrapApi(user))
    } catch (err) {
      res.json(wrapApi(null, '20002', err))
    }
  })()
}

exports.setInsertCancel = (req, res, next) => {
  (async function () {
    try {
      const userlist = req.body.userlist || req.query.userlist 
      const status = req.body.status || req.query.status

      const result = await Promise.all(userlist.map(async item => {
        await userModel.findOneAndUpdate(
          { _id: item },
          {
            'status': status,
            'insert_house': []
          },
          { upsert: true, new: true }
        )
        await hatcheryQuantityModel.remove({user_id: item, confirm: 1})
        await insertModel.remove({user_id: item})
      }))

      res.json(wrapApi({status: user.status}))
    } catch (err) {
      res.json(wrapApi(null, '10001', err))
    }
  })()
}
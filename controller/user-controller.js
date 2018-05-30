'use strict'

const userModel = require('../model/user-model')
const hatcheryModel = require('../model/hatchery-model')
const hatcheryQuantityModel = require('../model/hatchery-quantity-model')
const wrapApi = require('../common/wrap-api')
const moment = require('moment')

//인증 (임시)
exports.auth = (req, res, next) => {
  (async function () {
    try {
      const name = req.query.type === 'admin2' ? '기성용' : '박성용'
      const user = await userModel.findOne({name : name})
      res.json(wrapApi({token : user._id}))
    } catch (err) {
      res.json(wrapApi(null, '10001', err))
    }
  })()
}

exports.getUserHouse = (req, res, next) => {
  (async function () {
    try {
      const userId = req.params.id
      const user = await userModel.findOne({_id: userId})
      const result = user.house
      res.json(wrapApi(result))
    } catch (err) {
      res.json(wrapApi(null, '10001', err))
    }
  })()
}


exports.getUserList = (req, res, next) => {
  (async function () {
    try {
      let users = await userModel.find()
      users = users.map(item => {
        item.password = undefined
        return item
      })
      res.json(wrapApi(users))
    } catch (err) {
      res.json(wrapApi(null, '10001', err))
    }
  })()
}

exports.getUser = (req, res, next) => {
  (async function () {
    const userId = req.params.id
    try {

      const user = await userModel.findOne({_id: userId})
      // const hatchery = await hatcheryModel.find().map(item => {
      //   return {
      //     hatchery_id: item.hatchery_id,
      //     name: item.name,
      //     total_quantity: item.total_quantity
      //   }
      // })
      if (user.length <= 0) throw new Error()

      const result = {
        name: user.name,
        totalQuantity: user.total_quantity,
        latestQuantity: user.latest_quantity,
        // hatcheryList: hatchery
      }
      res.json(wrapApi(result))

    } catch (err) {
      res.json(wrapApi(null, '10001', err))
    }
  })()
}

exports.getUserStatus = (req, res, next) => {
  (async function () {
    const userId = req.params.id
    try {

      const user = await userModel.findOne({_id: userId})

      res.json(wrapApi({status: user.status}))
    } catch (err) {
      res.json(wrapApi(null, '10001', err))
    }
  })()
}

exports.setUserStatus = (req, res, next) => {
  (async function () {
    try {
      const userId = req.params.id
      const status = req.body.status || req.query.status   
      if (!status) throw new Error()
      const user = await userModel.findOneAndUpdate(
        { _id: userId },
        {'status': status},
        { upsert: true, new: true }
      )
      res.json(wrapApi({status: user.status}))
    } catch (err) {
      res.json(wrapApi(null, '10001', err))
    }
  })()
}

exports.setUserListStatus = (req, res, next) => {
  (async function () {
    try {
      const userlist = req.body.userlist || req.query.userlist 
      const status = req.body.status || req.query.status
      const result = await Promise.all(userlist.map(async item => {
        const res = await userModel.findOneAndUpdate(
          { _id: item },
          {'status': status},
          { upsert: true, new: true }
        )
        return res
      }))
      res.json(wrapApi({result}))
    } catch (err) {
      res.json(wrapApi(null, '10001', err))
    }
  })()
}

exports.setReadyToInsert = (req, res, next) => {
  (async function () {
    try {
      const userId = req.params.id
      const status = 2
      if (!status) throw new Error()
      const user = await userModel.findOneAndUpdate(
        { _id: userId },
        {'status': status},
        { upsert: true, new: true }
      )
      res.json(wrapApi({status: user.status}))
    } catch (err) {
      res.json(wrapApi(null, '10001', err))
    }
  })()
}

exports.reset = (req, res, next) => {
  (async function () {
    try {
      
      const dbData = require('../db-data')
      await userModel.remove()
      await hatcheryQuantityModel.remove()
      const user = await userModel.create(dbData.user)
      await userModel.updateMany({}, { status:1 })
      await hatcheryQuantityModel.create(dbData.hatcheryQuantity)

      res.json(wrapApi())
    } catch (err) {
        res.json(wrapApi(null, '10001', err))
    }
  })()
}

exports.resetReady = (req, res, next) => {
  (async function () {
    try {
      const dbData = require('../db-data')
      await userModel.remove()
      await hatcheryQuantityModel.remove()
      const user = await userModel.create(dbData.user)
      await userModel.updateMany({}, { status:2 })
      await hatcheryQuantityModel.create(dbData.hatcheryQuantity)
      
      res.json(wrapApi())
    } catch (err) {
        res.json(wrapApi(null, '10001', err))
    }
  })()
}
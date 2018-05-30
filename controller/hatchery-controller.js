'use strict'

const userModel = require('../model/user-model')
const hatcheryModel = require('../model/hatchery-model')
const insertModel = require('../model/insert-model')
const hatcheryQuantityModel = require('../model/hatchery-quantity-model')
const wrapApi = require('../common/wrap-api')

/**
 * /hatchery
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getHatcheryInfo = (req, res, next) => {
  (async function() {
    try {

      const query = {}
      query.confirm = 0
      if (req.query.date) query.date = req.query.date
      if (req.query.user_id) query.user_id = req.query.user_id
      console.log('2', query)

      const hatchery = await hatcheryModel.find()
      const expectedQuantity = await hatcheryQuantityModel.find(query)
      const hatcheryQuantity = await hatcheryQuantityModel.find(
        { date: { $lte: query.date }, confirm: 1 }, 
      )
      let returnRows = hatchery.map(itemMap => {

        let totalQuantity = 0
        hatcheryQuantity.filter(itemFilter => {
          return itemMap.hatchery_id === itemFilter.hatchery_id
        }).map(item => {
          totalQuantity += parseInt(item.quantity || 0)
        })

        let totalExpectedQuantity = 0
        let dateList = []
        expectedQuantity.filter(itemFilter => {
          return itemMap.hatchery_id === itemFilter.hatchery_id
        }).map(item => {
          totalExpectedQuantity += Math.abs(parseInt(item.quantity || 0))
          dateList.push(item.date)
        })
        const result =  {
          hatchery_id: itemMap.hatchery_id,
          name: itemMap.name,
          quantity: totalQuantity,
          expectedQuantity: totalExpectedQuantity
        }

        if (query.user_id) result.dateList = dateList
        return result
      })




      const result = returnRows
      res.json(wrapApi(result))

    } catch (err) {
      res.json(wrapApi(null, '20001', err))
    }
  })()
}

/**
 * /hatchery-quantity
*/
exports.getHatcheryQuantity = (req, res, next) => {
  (async function() {
    try {

      const confirm = req.query.confirm || 0
      // const date = req.query.date

      const query = req.query.status ? { status: req.query.status } : {}
      const user = await userModel.find(query)
      const result = await Promise.all(user.map(async row => {

        const insertList = await insertModel.find({ user_id: row._id })
        console.log(insertList)
        const quantityList = await hatcheryQuantityModel.find({
          user_id: row._id,
          confirm: confirm
        })
        if (quantityList.length === 0 ) return
        let totalQuantity = 0
        const list = {
          sequence: row.sequence,
          user_id: row._id,
          email: row.email,
          user_name: row.name,
          status: row.status,
          list: quantityList.map(item => {
            totalQuantity += Math.abs(item.quantity)
            return {
              hatchery_id: item.hatchery_id,
              hatchery_name: item.name,
              quantity: Math.abs(item.quantity)
            }
          }),
          insertList: insertList,
          insert_house: row.insert_house
        }
        list.total_quantity = totalQuantity
        return list
      })).filter(item => item)
      res.json(wrapApi(result))
    } catch (err) {
      res.json(wrapApi(null, '20002', err))
    }
  })()
}

exports.setHatcheryQuantity = (req, res, next) => {
  (async function() {
    try {
      const list = req.body.list
      const rows = list.map(async item => {
        console.log(item)
        if (item.type === 2) item.quantity = -item.quantity
        if (item.quantity === 0) return
        return await hatcheryQuantityModel.findOneAndUpdate(
          { 
            date: item.date,
            hatchery_id: item.hatchery_id,
            type: item.type,
            user_id: item.user_id,
            // confirm: item.confirm
          },
          item,
          { upsert: true, new: true }
        )
      })
      res.json(wrapApi(rows))
    } catch (err) {
      res.json(wrapApi(null, '20003', err))
    }
  })()
}

exports.confirmHatcheryQuantity = (req, res, next) => {
  (async function() {
    try {

      const date = req.query.date
      const list = req.body.list

      const result = await Promise.all(list.map(async item => {
        const result = await hatcheryQuantityModel.update(
          {
            date: date,
            user_id: item._id,
            confirm: 0
          },
          { confirm: 1 },
          { new: true }
        )

        await userModel.findOneAndUpdate(
          { _id: item._id },
          {'status': 4},
          { new: true }
        )
      }))
    


      res.json(wrapApi(result))
    } catch (err) {
      res.json(wrapApi(null, '20002', err))
    }
  })()
}
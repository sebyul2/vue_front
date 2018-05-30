'use strict'

const userController = require('../../controller/user-controller')
const insertController = require('../../controller/insert-controller')
const hatcheryController = require('../../controller/hatchery-controller')
const api = require('express').Router()

api.get('/auth', userController.auth)

api.get('/user/:id/status', userController.getUserStatus)
api.post('/user/:id/status', userController.setUserStatus)
//스테이터스 리스트로 입력
api.post('/user/status', userController.setUserListStatus)

// 입추 대기 상태 변경
api.post('/user/:id/status/ready', userController.setReadyToInsert)
// 동 입력
api.post('/insert/:id/house/', insertController.setInsertHouse)
// 동별 입추 수수 입력
api.post('/insert/:id/quantity/', insertController.setInsert)
// 동별 입추 수수 가져오기
api.get('/insert/:id/quantity/', insertController.getInsert)
// 불허
api.post('/insert/:id/cancel', insertController.setInsertCancel)


api.get('/user/:id/house', userController.getUserHouse)

api.get('/user', userController.getUserList)

api.get('/user/:id', userController.getUser)

api.get('/hatchery', hatcheryController.getHatcheryInfo)
// 날짜로 조회한 분양 내역 리스트(유져별)
api.get('/hatchery/quantity', hatcheryController.getHatcheryQuantity)
// 부화장별 분양 정보 저장
api.post('/hatchery/quantity', hatcheryController.setHatcheryQuantity)
// 부화장별 분양 정보 저장
api.post('/hatchery/confirm', hatcheryController.confirmHatcheryQuantity)

//data 초기화 api
api.get('/reset', userController.reset)

//data 초기화 api
api.get('/reset/ready', userController.resetReady)

module.exports = api

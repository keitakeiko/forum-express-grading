const express = require('express')
const router = express.Router()
const admin = require('./modules/admin') // 載入 admin.js
const restController = require('../controllers/restaurant-controller')
const userController = require('../controllers/user-controller')

router.use('/admin', admin)
// 注意順序
router.get('/signup', userController.signUpPage)
router.post('/signup', userController.signUp) // 注意用 post

router.get('/restaurants', restController.getRestaurants)

router.use('/', (req, res) => res.redirect('/restaurants'))

module.exports = router

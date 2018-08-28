
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/saveData'(req, res) => {
  res.render('thankyou')
})
module.exports = router

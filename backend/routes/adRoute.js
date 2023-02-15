const { Router } = require('express')

const { createAd } = require('../controllers/adController')
const { verifyToken } = require('../middleware/authMiddleware')
const adRoute = Router()

adRoute.post("/create-ad",verifyToken, createAd)

module.exports = adRoute
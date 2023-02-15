const { Router } = require('express')

const { getBuyer } = require('../controllers/getBuyer')
const { verifyToken } = require('../middleware/authMiddleware')

const buyerRouter = Router()

// buyerRouter.use(verifyToken)
buyerRouter.get('/buyers', verifyToken, getBuyer)

module.exports = buyerRouter


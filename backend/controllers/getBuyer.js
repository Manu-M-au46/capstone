const buyerModel = require("../models/buyersignupModel")
const agentModel = require('../models/agentModel')
require('../middleware/authMiddleware')

const getBuyer = async (req,res) => {
          res.send(req.rootUser)
    }

    const getAgent = async (req,res) => {
      res.send(req.rootUser)
}



    module.exports = { getBuyer }
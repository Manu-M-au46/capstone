const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../controllers/usersignupController')
const buyerModel = require('../models/buyersignupModel')



const verifyToken = async (req, res, next) => {
  
        try {
            const token = req.cookies.jwt
            const userPayload = jwt.verify(token, SECRET_KEY);
            const rootUser = await buyerModel.findOne({ _id: userPayload._id, "tokens.token": token});
          
            if(!rootUser){console.log("User Not Found")}
            req.token = token;
            req.rootUser = rootUser;
            req._id = rootUser._id;
            
            next();
            
        } catch (error) {
            res.status(400).send({status: 'error', msg: "Token Invaild"})
        }
    
}
 
module.exports ={
    verifyToken
} 
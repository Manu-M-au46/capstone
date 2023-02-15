const agentModel = require('../models/agentModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Base64 = require('js-base64')

const SECRET_KEY = 'secret'

const signup = async (req,res) => {
const { name, email, password, cpassword, role} = req.body

try {
    if(password != cpassword){
        res.status(400).send({status: 'error', msg: "passwords not matching"})
    }

    const hashedPassword = await bcrypt.hash(password,3)
    const newUser = await agentModel.create({name, email, password: hashedPassword, cpassword: hashedPassword , role})
   
   
    res.status(200).send({status: 'success', user: {name: newUser.name, email: newUser.email}})

} catch (error) {
    res.status(500).send({status: 'error', error, msg: "Internal Server Error"})
}
}

const login = async (req,res) => {
 const { email, password } = req.body
try {
   const loggedInUser = await agentModel.findOne({email})
   if(!loggedInUser){
    res.status(404).send({status: 'error', msg: "user not found"})
   }

const passwordMatch = await bcrypt.compare(password, loggedInUser.password) 

   if(!passwordMatch){
    res.status(400).send({status: 'error', msg: "password incorrect"})
   }
//    const userPayload = { email }
   const token = jwt.sign( {_id: loggedInUser._id} , SECRET_KEY, {algorithm: 'HS256', expiresIn: '1d'})
   loggedInUser.tokens = loggedInUser.tokens.concat({ token });
   await loggedInUser.save();
   res.cookie('jwt', token)
    return res.send({status: 'success', msg: "user loggedin successfully", token})
    
} catch (error) {
   return res.status(400).send({status: 'error', msg: "password incorrect"})
}

}

const logout = (req,res) => {
        try {
        res.clearCookie("jwt");
        res.send({status: 'success', msg: "user logged out successfully"});
        } catch (error) {
        res.status(500).send({status: 'error', error, msg: "Internal Server Error"});
        }
        
}

module.exports = {
    signup,
    login,
    logout,
    SECRET_KEY
}
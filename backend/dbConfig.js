const mongoose = require('mongoose')


async function DBConnect() {
    try {
        await mongoose.connect(process.env.MONGO_URL, {dbName: 'DreamHome'})
        console.log("connection to DB successfull")
    } catch (error) {
        console.log("error conencting DB")
        process.exit()
        
    }

}

module.exports = DBConnect
const express = require('express');
const DBConnect = require('./dbConfig');
const authRouter =  require('./routes/authRoute');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
const dotenv =  require('dotenv')
const buyerRouter = require('./routes/getBuyerRoute');
const adRoute = require('./routes/adRoute')

dotenv.config();
app.use(cors());

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/', authRouter)
app.use('/', buyerRouter)
app.use('/', adRoute)

const PORT = process.env.PORT || 3006 
app.listen(PORT, () => {
    console.log(`Server Started Successfully at port ${PORT}`)
    DBConnect();
})
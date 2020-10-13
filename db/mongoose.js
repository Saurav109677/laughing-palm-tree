const  mongoose = require('mongoose')
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL,
    {
        useNewUrlParser:true,
        useUnifiedTopology: true,
        useFindAndModify:false   // to remove deprecation warning
    }
).then(
    (data)=>console.log("Db connected successfuly")
).catch(
    (err)=>console.log("error")
)

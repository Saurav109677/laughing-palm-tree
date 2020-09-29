const  mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL,
    {
        useNewUrlParser:true,
        useUnifiedTopology: true,
        useFindAndModify:false   // to remove deprecation warning
    }
).then(
    (data)=>console.log("Db connected successfuly"+process.env.DATABASE_URL)
).catch(
    (err)=>console.log("error")
)

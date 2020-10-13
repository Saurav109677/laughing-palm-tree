const  mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL,
    {
        useNewUrlParser:true,
        useUnifiedTopology: true,
        useFindAndModify:false   // to remove deprecation warning
    }
).then(
    (data)=>console.log("Db connected successfuly"+"mongodb://127.0.0.1:27017/task-manager-api")
).catch(
    (err)=>console.log("error")
)

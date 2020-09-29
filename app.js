const express = require('express')
const cors=require('cors')
require('./db/mongoose')
const admin_quest_router= require('./routers/adminQuestRouter')
const AdminQuest= require('./models/AdminQuest')

const PORT = 9000 || process.env.PORT
const app=express()

app.use(cors())
app.use(express.json())
app.use(admin_quest_router)
app.use(express.static('./frontend/dist'))


app.listen(PORT,()=>{
    console.log("Server up running on port:"+PORT);
})
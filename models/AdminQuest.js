const mongoose = require('mongoose')

const questSchema = new mongoose.Schema({
 
    question:{
        type:String,
        required:true
    },
    option1:{
        type:String,
        required:true
    },
    option2:{
        type:String,
        required:true
    },
    option3:{
        type:String,
        required:true
    },
    option4:{
        type:String,
        required:true
    },
    correctAns:{
        type:String,
        required:true
    }
},
{timestamps:true}
)

// to hide the private data
// when data is being stringify then this funciton is automatically called
// when res.send() is called it calls stringify
questSchema.methods.toJSON = function(){
    const quest = this  //u can also use this.. but it not look good to use this.
    const questObj = quest.toObject()

    delete questObj.createdAt
    delete questObj.updatedAt
    delete questObj.__v

    return questObj
}

const AdminQuest = mongoose.model('AdminQuest',questSchema,'AdminQuest')
// mongoose.model(name,[schema],[collection],[skipInit])
// when no colleciton arg is passed. mongoose produces a collection name by pluralizing 
// the model name . if u dont want that .. provide collection name

module.exports=AdminQuest

const express = require('express')
const AdminQuest = require('../models/AdminQuest')
const router = new express.Router()

// const arrayofQues = [
    // {
    //     question:"Hi ! Who r you?",
    //     option1:"14abc",
    //     option2:"14abc2",
    //     option3:"14abc3",
    //     option4:"14abc4",
    //     correctAns:3
    // },

//     {
//         question:"Hi ! Who r you?",
//         option1:"24abc",
//         option2:"24abc2",
//         option3:"24abc3",
//         option4:"24abc4",
//         correctAns:3
//     },

//     {
//         question:"Hi ! Who r you?",
//         option1:"34abc",
//         option2:"34abc2",
//         option3:"34abc3",
//         option4:"34abc4",
//         correctAns:3
//     }
// ]

const arrayofQues=[]


//getting all the questions
router.get('/adminQuest',async (req, res)=>{
    try{
        
        const result=await AdminQuest.find({})
        if(!result)
            return res.status(400).send()

        
        res.status(200).send(result)
    }
    catch(e){
        res.status(500).send(e)
    }
 }
)


//adding the questions
router.post('/adminQuest',async (req,res)=>{
    const newQuest = new AdminQuest(req.body)
    try{
        await newQuest.save()
        res.status(201).send(newQuest)
    }
    catch{
        res.status(500).send({
            "error":"error"
        })
    }
    
})

//adding the array of questions
router.post('/adminAllQuest', (req,res)=>{
     
    this.arrayofQues=req.body
  // console.log(this.arrayofQues);
    this.arrayofQues.quesAnsArray.forEach(async element => {
        //console.log(element);
        const newQuest = new AdminQuest(element)
        try{
             await newQuest.save()
        }
        catch{
            res.status(500).send({
                "error":"error"
            })
        }
    });
       
    res.status(201).send()
})

//updating the question
router.patch('/adminQuest/:id',async (req,res)=>{
    try{
        const updatedValue=await AdminQuest.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).send(updatedValue)
    }
    catch(e){
        res.status(400).send(e)
    }
})

//getting question by ID
router.get('/adminQuest/:id',async (req, res)=>{
    try{
        
        const result=await AdminQuest.findById(req.params.id)
        if(!result)
            return res.status(400).send()

        
        res.status(200).send(result)
    }
    catch(e){
        res.status(500).send(e)
    }
 }
)

router.delete('/adminQuest/:id',async (req,res)=>{
    try{
        await AdminQuest.findByIdAndDelete(req.params.id)
        res.status(200).send()
    }
    catch(e){
        res.status(500).send()
    }
})



module.exports= router
import asyncHandler from 'express-async-handler'
import Slot from "../models/Solts.js";

const getAllSlots = asyncHandler(async(req,res)=>{

    const slots = await Slot.find({chef:req.headers.id})
     
    res.send(slots)
    
})
const createSlots = asyncHandler(async(req,res)=>{

    const {Date, Days, StartTime,EndTime,chef} = req.body

    const slot = await Slot.create({
        Date,
        Days,
        StartTime,
        EndTime,
        chef
    })

    if(slot){
        res.status(201).json({message:"Record Created"})
    }
    else{
        res.status(400)
        throw new Error('Something went wrong')
    }
    res.send(slot)
})

//Get Single Slot

const getSlot= asyncHandler(async(req,res)=>{
    const slot = await Slot.findById(req.headers.id)
    if(slot){
        res.send({
           _id:slot.id,
           Date:slot.Date,
           Days:slot.Days,
           StartTime:slot.StartTime,
           EndTime:slot.EndTime,
        })
    }
    else{
       res.status(404)
       throw new Error('Invalid user data') 
    }
})


//Update Slot

const updateSlot = asyncHandler(async(req,res)=>{
    const slot= await Slot.findById(req.headers.id)
    if(slot){
        slot.Date= req.body.Date || slot.Date
        slot.Days = req.body.Days || slot.Days
        slot.StartTime = req.body.StartTime || slot.StartTime
        slot.EndTime  = req.body.EndTime || slot.EndTime 

        const updatedSlot = await slot.save()

         res.send({msg:"Updated Successfully",updatedSlot}) 
    }
    else{
       res.status(404)
       throw new Error('Invalid user data') 
    }
})

// delete Slot

const deleteSlot = asyncHandler(async(req,res)=>{

    const slot = await Slot.findById(req.params.id)
     
     if(slot){
         await slot.remove()
         res.send({message:'Slot Removed'})
     }
     else{
         res.status(404)
         res.json({message:'Not Found'})
     }
    
})

export {getAllSlots,createSlots,getSlot,updateSlot,deleteSlot}
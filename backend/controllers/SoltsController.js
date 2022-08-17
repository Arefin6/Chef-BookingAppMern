import asyncHandler from 'express-async-handler'
import Slot from "../models/Solts.js";

const getAllSlots = asyncHandler(async(req,res)=>{

    const slots = await Slot.find({chef:req.headers.id})
     
    res.send(slots)
    
})
const createSlots = asyncHandler(async(req,res)=>{

    const {Date,StartTime,EndTime,chef} = req.body

    const slot = await Slot.create({
        Date,
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

export {getAllSlots,createSlots}
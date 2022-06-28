import asyncHandler from 'express-async-handler'
import Slot from "../models/Solts.js";

const getAllSlots = asyncHandler(async(req,res)=>{

    const slots = await Slot.find({})
     
    res.send(slots)
    
})
const createSlots = asyncHandler(async(req,res)=>{

    const {Date,Time,chef} = req.body

    const slot = await Slot.create({
        Date,
        Time,
        chef
    })

    if(slot){
        res.status(201).json({message:"Recored Created"})
    }
    else{
        res.status(400)
        throw new Error('Something went wrong')
    }
     
    res.send(slot)
    
})

export {getAllSlots,createSlots}
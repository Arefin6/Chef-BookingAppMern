import asyncHandler from 'express-async-handler'
import Booking from '../models/Booking.js';

const getAllSlotsOfChef = asyncHandler(async(req,res)=>{
    try {
        const booking = await Booking.find({chef:req.headers.id}).populate("slot");
        res.send(booking)
    } catch (error) {
        console.log(error)
    }   
})

export {getAllSlotsOfChef}
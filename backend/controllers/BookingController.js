import asyncHandler from 'express-async-handler'
import Booking from '../models/Booking.js';
import { verificationEmail } from '../utilites/sendMail.js';

const getAllSlotsOfChef = asyncHandler(async(req,res)=>{
    try {
        const booking = await Booking.find({chef:req.headers.id}).populate("slot");
        res.send(booking)
    } catch (error) {
        console.log(error)
    }   
})

// update Booking

const updateBooking = asyncHandler(async(req,res)=>{
    const booking= await Booking.findById(req.params.id)
    if(booking){

        const url = "Your Booking is Approved";

        booking.isApproved  = true;
        
        const emailSent =  await verificationEmail(booking.customerEmail, "Booking Approved", url);

        if(emailSent){
			res.status(200).send({ message: "Approved Email Sent" });
		}    
        

        const updatedBooking = await booking.save()

         res.send({msg:"Updated Successfully",updatedBooking}) 
    }
    else{
       res.status(404)
       throw new Error('Invalid Booking data') 
    }
})

export {getAllSlotsOfChef,updateBooking}
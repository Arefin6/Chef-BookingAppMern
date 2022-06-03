import Chef from './../models/ChefModel.js';
import Slot from './../models/Solts.js';
import Booking from './../models/Booking.js';

const countDocuments = async(req,res) =>{

    const chefCount = await Chef.count();

    const slotsCount = await Slot.count();
    
    const BookingsCount = await Booking.count();

    res.json({chefCount,slotsCount,BookingsCount})
    

}

export {countDocuments};
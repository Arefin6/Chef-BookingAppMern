import  mongoose  from 'mongoose'

const bookingSchema = mongoose.Schema({
    customerEmail:{
        type:String,
        required:true
    },
    chef:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Chef"
    },
    slot:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Slot"  
    },
    isApproved:{
        type:Boolean,
        required:true,
        default:false
    }
 }
)


const Booking = mongoose.model('Booking',bookingSchema)

export default Booking;
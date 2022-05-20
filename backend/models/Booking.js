import  mongoose  from 'mongoose'

const bookingSchema = mongoose.Schema({
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Customer"
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
    status:{
        type:Number,
        required:true,
        default:0
    }
 },{
   timestamps:true 
 }
)


const Booking = mongoose.model('Booking',bookingSchema)

export default Booking;
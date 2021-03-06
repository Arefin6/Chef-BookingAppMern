import  mongoose  from 'mongoose'

const slotSchema = mongoose.Schema({
    Date:{
        type:Date,
        required:true
    },
    Time:{
        type:String,
        required:true,
    },
    chef:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Chef"
    },
 },{
   timestamps:true 
 }
)


const Slot = mongoose.model('Slot',slotSchema)

export default Slot;
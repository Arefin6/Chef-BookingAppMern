import  mongoose  from 'mongoose'
import bcrypt from 'bcryptjs'

const verificationSchema = mongoose.Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Chef",
        required:true
    },
    token:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        expires:3600,
        default:Date.now()
    }
 }
)

 verificationSchema.methods.matchToken = async function(enteredToken){
    return await bcrypt.compare(enteredToken,this.token)
}

 verificationSchema.pre('save',async function(next){
    
    if(!this.isModified('token')){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    
    this.token = await bcrypt.hash(this.token,salt)

})

const VerificationToken = mongoose.model('VerificationToken',verificationTokenSchema)

export default VerificationToken;
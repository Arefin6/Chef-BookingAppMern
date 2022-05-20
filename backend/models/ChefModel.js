import  mongoose  from 'mongoose'
import bcrypt from 'bcryptjs'

const chefSchema = mongoose.Schema({
    name:{
        type:
        String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profilePicture:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    }
 },{
   timestamps:true 
 }
)

chefSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

chefSchema.pre('save',async function(next){
    
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    
    this.password = await bcrypt.hash(this.password,salt)

})

const Chef = mongoose.model('Chef',chefSchema)

export default Chef;
import asyncHandler from 'express-async-handler'
import generateAuthToken from '../utilites/generateAuthToken.js'
import Chef from './../models/ChefModel.js';


const authUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body

    const chef = await Chef.findOne({email})

    if(chef && (await chef.matchPassword(password))){
        res.send({
            _id:chef.id,
            name:chef.name,
            email:chef.email,
            token:generateAuthToken(chef._id)
        })
    }
    else{
        res.status(401).send({message:"Invalid UserName Or Password"})
        // throw new Error('Invalid email or password')
    }

})

// //Get userProfile

// const getUserProfile = asyncHandler(async(req,res)=>{
//      const user = await User.findById(req.user._id)
//      if(user){
//          res.send({
//             _id:user.id,
//             name:user.name,
//             email:user.email,
//             isAdmin:user.isAdmin,
//          })
//      }
//      else{
//         res.status(404)
//         throw new Error('Invalid user data') 
//      }
// })

//Update User Profile


// const updateUserProfile = asyncHandler(async(req,res)=>{
//     const user = await User.findById(req.user._id)
//     if(user){
//         user.name= req.body.name || user.name
//         user.email = req.body.email || user.email

//         if(req.body.password){
//             user.password = req.body.password
//         }

//         const updatedUser = await user.save()

//         res.send({
//            _id:updatedUser.id,
//            name:updatedUser.name,
//            email:updatedUser.email,
//            isAdmin:updatedUser.isAdmin,
//         })
//     }
//     else{
//        res.status(404)
//        throw new Error('Invalid user data') 
//     }
// })

//Register User

const registerChef = asyncHandler(async(req,res)=>{
     
    const {name,email,password,profilePicture,details} = req.body

    const chefExits = await Chef.findOne({email})
      
     if(chefExits){
         res.status(400)
        
         throw new Error('Chef already exists')
     }

     const chef = await Chef.create({
         name,
         email,
         password,
         profilePicture,
         details
     })

     if(chef){
         res.status(201).json({
            _id:chef.id,
            name:chef.name,
            email:chef.email,
            token:generateAuthToken(chef._id)
         })
     }
     else{
         res.status(400)
         throw new Error('Invalid user data')
     }

})

//get All User For ADmin


// const getAllUsers = asyncHandler(async(req,res)=>{

//     const users = await User.find({})
     
//     res.send(users)
    
// })

// const deleteUser = asyncHandler(async(req,res)=>{

//     const user = await User.findById(req.params.id)
     
//      if(user){
//          await user.remove()
//          res.send({message:'User Removed'})
//      }
//      else{
//          res.status(404)
//          res.json({message:'Not Found'})
//      }
    
// })

//get User By Id

// const getUserById = asyncHandler(async(req,res)=>{

//     const user = await User.findById(req.params.id).select('-password')
     
//      if(user){
//          res.send(user)
//      }
//      else{
//          res.status(404)
//          res.json({message:'Not Found'})
//      }
    
// })

//Update user By id

// const updateUserById = asyncHandler(async(req,res)=>{

//     const user = await User.findById(req.params.id)
     
//      if(user){
//         user.name= req.body.name || user.name
//         user.email = req.body.email || user.email 
//         user.isAdmin = req.body.isAdmin

//         const updatedUser = await user.save()

//          res.send({
//              id:updatedUser._id,
//              name:updatedUser.name,
//              email:updatedUser.email,
//              isAdmin:updatedUser.isAdmin
//          })
//      }
//      else{
//          res.status(404)
//          res.json({message:'Not Found'})
//      }
    
// })



export {authUser,registerChef}
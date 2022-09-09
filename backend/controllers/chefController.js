import asyncHandler from 'express-async-handler'
import generateAuthToken from '../utilites/generateAuthToken.js'

import Chef from './../models/ChefModel.js';
import Token from './../models/token.js';
import { verificationEmail } from '../utilites/sendMail.js';
import crypto from 'crypto';


const authUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body

    try {
        const chef = await Chef.findOne({email})
        if (!chef)
			return res.status(401).send({ message: "Invalid Email or Password" }); 

        const validPassword = await chef.matchPassword(password);
        if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" })
            
            if (!chef.emailVerified) {
                let token = await Token.findOne({ userId: chef._id });
                if (!token) {
                    token = await new Token({
                        userId: chef._id,
                        token: crypto.randomBytes(32).toString("hex"),
                    }).save();
                    const url = `${process.env.BASE_URL}users/${chef.id}/verify/${token.token}`;
                    await verificationEmail(chef.email, "Verify Email", url);
                }
    
                return res
                    .status(400)
                    .send({ message: "An Email sent to your account please verify" });
            }
            else{
                res.status(200).
                send({
                    _id:chef.id,
                    name:chef.name,
                    email:chef.email,
                    token:generateAuthToken(chef._id)
                })  
            }
		         

    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Internal Server Error" });
    }
})

//Get ChefProfile

const getChefProfile = asyncHandler(async(req,res)=>{
     const chef = await Chef.findById(req.headers.id)
     if(chef){
         res.send({
            _id:chef.id,
            name:chef.name,
            email:chef.email,
            details:chef.details,
         })
     }
     else{
        res.status(404)
        throw new Error('Invalid user data') 
     }
})

//Update Chef Profile

const updateChefProfile = asyncHandler(async(req,res)=>{
    const chef = await Chef.findById(req.headers.id)
    if(chef){
        chef.name= req.body.name || chef.name
        chef.email = req.body.email || chef.email
        chef.details = req.body.details || chef.details

        if(req.body.password){
            chef.password = req.body.password
        }

        const updatedChef = await chef.save()

        res.send({
           _id:updatedChef.id,
           name:updatedChef.name,
           email:updatedChef.email,
           details:updatedChef.details,
        })
    }
    else{
       res.status(404)
       throw new Error('Invalid user data') 
    }
})

//Register Chef

const registerChef = asyncHandler(async(req,res)=>{

    try{
    const {name,email,password,profilePicture,details} = req.body

    const chefExits = await Chef.findOne({email})
      
     if(chefExits){
        return res
        .status(409)
        .send({ message: "User with given email already Exist!" });
     }

     const chef = await Chef.create({
         name,
         email,
         password,
         profilePicture,
         details
     })

     const token = await new Token({
        userId: chef._id,
        token: crypto.randomBytes(32).toString("hex"),
    }).save();
    const url = `${process.env.BASE_URL}users/${chef.id}/verify/${token.token}`;
    await verificationEmail(chef.email, "Verify Email", url);

    res
        .status(201)
        .send({ message: "An Email sent to your account please verify" });
    } 
    catch (error) {
            console.log(error);
            res.status(500).send({ message: "Internal Server Error" });
    }    

})


const verifyToken = asyncHandler(async(req,res)=>{
    try {
		const chef = await Chef.findOne({ _id: req.params.id });
		if (!chef) return res.status(400).send({ message: "Invalid link" });

		const token = await Token.findOne({
			userId: chef._id,
			token: req.params.token,
		});
		if (!token) return res.status(400).send({ message: "Invalid link" });

		await Chef.updateOne({_id:chef._id}, { $set: {emailVerified:true}}) ;
		await token.remove();

		res.status(200).send({ message: "Email verified successfully" });
	} catch (error) {
        console.log(error)
        res.status(500).send({ message: "Internal Server Error"});
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

//         const updatedChef = await user.save()

//          res.send({
//              id:updatedChef._id,
//              name:updatedChef.name,
//              email:updatedChef.email,
//              isAdmin:updatedChef.isAdmin
//          })
//      }
//      else{
//          res.status(404)
//          res.json({message:'Not Found'})
//      }
    
// })



export {authUser,registerChef,verifyToken,getChefProfile,updateChefProfile}
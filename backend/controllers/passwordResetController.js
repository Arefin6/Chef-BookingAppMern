import asyncHandler from 'express-async-handler'
import Chef from './../models/ChefModel.js';
import Token from './../models/token.js';
import { verificationEmail } from '../utilites/sendMail.js';
import crypto from 'crypto';


const sendPasswordLink = asyncHandler(async(req,res)=>{
    const {email} = req.body
    try {
        const chef = await Chef.findOne({email})
        if (!chef)
			return res.status(401).send({ message: "Chef With This email Doesn't Exits" }); 

        let token = await Token.findOne({ userId: chef._id });

        if(!token){
            token = await new Token({
                userId: chef._id,
                token: crypto.randomBytes(32).toString("hex"),
            }).save();
        }
        const url = `${process.env.BASE_URL}password-reset/${chef.id}/${token.token}`;
                    await verificationEmail(chef.email, "Password Reset", url);             

    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Internal Server Error" });
    }
})

export {sendPasswordLink}
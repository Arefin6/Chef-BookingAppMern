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
        const emailSent =  await verificationEmail(chef.email, "Password Reset", url);
		if(emailSent){
			res.status(200).send({ message: "Password Reset Link Sent to your Email" });
		}             

    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Internal Server Error" });
    }
})

//Verify Password password reset link

const verifyPasswordResetLink = asyncHandler(async(req,res)=>{
    try {
		const chef = await Chef.findOne({ _id: req.params.id });
		if (!chef) return res.status(400).send({ message: "Invalid link" });

		const token = await Token.findOne({
			userId: chef._id,
			token: req.params.token,
		});
		if (!token) return res.status(400).send({ message: "Invalid link" });

		res.status(200).send("Valid Url");
	} catch (error) {
        console.log(error);
		res.status(500).send({ message: "Internal Server Error" });
	}
})

//set new Password

const setNewPassword = asyncHandler(async(req,res)=>{
    try {

		const chef = await Chef.findOne({ _id: req.params.id });
		if (!chef) return res.status(400).send({ message: "Invalid link" });

		const token = await Token.findOne({
			userId: chef._id,
			token: req.params.token,
		});
		if (!token) return res.status(400).send({ message: "Invalid link" });

		if (!chef.emailVerified) chef.emailVerified = true;

		chef.password = req.body.password;
		await chef.save();
		await token.remove();
		res.status(200).send({ message: "Password reset successfully" });
	} catch (error) {
        console.log(error)
		res.status(500).send({ message: "Internal Server Error" });
	}
})


export {sendPasswordLink,verifyPasswordResetLink,setNewPassword}
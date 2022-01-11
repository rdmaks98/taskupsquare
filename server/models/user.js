/** @format */

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		firstname: { type: String, required: true },
		lastname: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		profilePhoto: { type: String },
		resetPasswordToken: { type: String },
		resetPasswordExpire: { type: Date },
	},
	{ timestamps: true }
);

// Generating Password Reset Token
userSchema.methods.getResetPasswordToken = function () {
	// Generating Token
	const resetToken = crypto.randomBytes(20).toString('hex');
	// * for more details copy to online node compiler
	/* 
  const crypto = require("crypto");
  const token = crypto.randomBytes(20).toString("hex");
  console.log(token);
  const tokenCrypto = crypto.createHash("sha256").update(token).digest("hex");
  console.log(tokenCrypto)
  */
	// Hashing and adding resetPasswordTOken to userSchema
	this.resetPasswordToken = crypto
		.createHash('sha256')
		.update(resetToken)
		.digest('hex');
	//* this will valid only for 15 min
	this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
	return resetToken;
};

export default mongoose.model('User', userSchema, 'users');

/** @format */

import { User } from '../../models';
import { JWT_SECRET } from '../../config';
import jwt from 'jsonwebtoken';
import CustomErrorHandler from '../../services/CustomErrorHandler';
import sendEmail from '../../sendEmail/sendmail';

const forgotpasswordController = {
	async forgotPassword(req, res, next) {
		const { email } = req.body;
		const userdata = await User.findOne({ email: req.body.email });
		if (!userdata) {
			return next(CustomErrorHandler.userRegister());
		}

		// user exists and now create one time reset password link
		const secret = JWT_SECRET + userdata.password;
		const payload = {
			email: userdata.email,
			id: userdata._id,
		};
		const access_token = jwt.sign(payload, secret, { expiresIn: '20000s' });
		userdata.resetPasswordToken = access_token;
		userdata.resetPasswordExpire= Date.now() + 48000000;
		userdata.save();
		const message = `http://localhost:2020/api/reset-password/${access_token}`;
		try {
			await sendEmail({
				email: userdata.email,
				subject: `Reset Passsowrd`,
				message,
			});
			return res.json({
				statusCode: 200,
				message: `Reset password link send successfully check your email ${userdata.email}`,
			});
		} catch (err) {
			return next(err);
		}
	},
};

export default forgotpasswordController;

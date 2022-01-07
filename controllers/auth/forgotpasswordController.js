/** @format */

import { User } from '../../models';
import { JWT_SECRET } from '../../config';
import jwt from 'jsonwebtoken';

const forgotpasswordController = {
	async forgotPassword(req, res, next) {
		console.log(1234);
		// const { email } = req.body;
		// const data = await user.findOne({ email: req.body.email });
		// console.log(data);
		// if (req.body.email !== data.email) {
		// 	return res.json({
		// 		message: 'please register',
		// 	});
		// }
		// // user exists and now create one time reset password link
		// const secret = JWT_SECRET + data.password;
		// const payload = {
		// 	email: data.email,
		// 	id: data._id,
		// };
		// const access_token = jwt.sign(payload, secret, { expiresIn: '2000s' });
		// const link = `http://localhost:2020/reset-password/${data.id}/${access_token}`;
		// res.json({
		// 	message: `password reset link sending in your email${link}`,
		// });
	},
};

export default forgotpasswordController;

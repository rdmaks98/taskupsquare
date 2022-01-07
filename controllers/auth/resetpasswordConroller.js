/** @format */
import { JWT_SECRET } from '../../config';
import { User } from '../../models';
import Jwt from 'jsonwebtoken';

const resetpasswordController = {
	async resetPassword(req, res, next) {
		const { id, token } = req.params;
		const user = User.findOne({ _id: id });
		// check if id is exist in database
		// if (id !== User._id) console.log(2);

		// res.json({
		// 	message: 'invalid id',
		// });

		const secret = JWT_SECRET + user.password;
		console.log(secret);

		try {
			const payload = Jwt.verify(token, secret);
			res.json({
				email: user.email,
			});
		} catch (err) {
			return next(err);
		}
	},
};

export default resetpasswordController;

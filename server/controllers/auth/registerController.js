/** @format */

import Joi from 'joi';
import CustomErrorHandler from '../../services/CustomErrorHandler';
import { User } from '../../models';
import bcrypt from 'bcrypt';

const registerController = {
	async register(req, res, next) {
		// make validation using joi
		const registerSchema = Joi.object({
			firstname: Joi.string().min(3).max(20).required(),
			lastname: Joi.string().min(4).max(30).required(),
			email: Joi.string().email().required(),
			password: Joi.string()
				.pattern(new RegExp('^[a-zA-Z0-9]{3,20}$'))
				.required(),
			repeat_password: Joi.ref('password'),
		});

		const { error } = registerSchema.validate(req.body);

		if (error) {
			return next(error);
			// throw error;
		}

		// check if user is in the datbase already

		try {
			const emailIsExist = await User.exists({ email: req.body.email });
			if (emailIsExist) {
				return next(
					CustomErrorHandler.alreadyExist('this email is already in that site')
				);
			}
		} catch (err) {
			return next(err);
		}

		// prepare the model user
		const { firstname, lastname, email, password } = req.body;

		// hash password (bcrypt password)
		const hashedPassword = await bcrypt.hash(password, 10);
		const user = new User({
			firstname: firstname,
			lastname: lastname,
			email: email,
			password: hashedPassword,
		});

		try {
			const result = await user.save();
			console.log(result);
		} catch (err) {
			//token
			return next(err);
		}

		res.json({
			statusCode: 200,
			msg: 'register successfully',
		});
	},
};

export default registerController;

/** @format */

import Joi from 'joi';
import { User } from '../../models';
import CustomErrorHandler from '../../services/CustomErrorHandler';
import bcrypt from 'bcryptjs';
import JwtService from '../../services/JwtServices';

const loginController = {
	async login(req, res, next) {
		// validation
		const loginSchema = Joi.object({
			email: Joi.string().email().required(),
			password: Joi.string()
				.pattern(new RegExp('^[a-zA-Z0-9]{3,20}$'))
				.required(),
		});

		const { error } = loginSchema.validate(req.body);

		if (error) {
			return next(error);
		}

		let { email, password } = req.body;
		const user = await User.findOne({ email: email });
		if (!user) {
			return res.json(CustomErrorHandler.invalidEmail());
		}

		// compare a password
		const matchpass = await bcrypt.compare(password, user.password);
		if (!matchpass) {
			return res.json(CustomErrorHandler.invalidEmail());
		}

		try {
			// token
			let generate_token = JwtService.sign({ _id: user._id });
			res.cookie('access_token', generate_token, {
				httOnly: true,
				expires: new Date(Date.now() + 60000),
			});
			return res.json({ generate_token: generate_token });
		} catch (err) {
			return next(err);
		}
	},
};

export default loginController;

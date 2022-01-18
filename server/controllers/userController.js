/** @format */
import { User } from '../models';
import bcrypt from 'bcryptjs';
import Joi from 'joi';
import CustomErrorHandler from '../services/CustomErrorHandler';

const userController = {
	// me
	async me(req, res, next) {
		try {
			const user = await User.findOne({ _id: req.user._id });
			// console.log(user);
			if (!user) {
				return next(CustomErrorHandler.notFound());
			}
			res.json(user);
		} catch (err) {
			return next(err);
		}
	},

	// update user
	async update(req, res, next) {
	
		const user = await User.findOne({ _id: req.user._id });
		if (!user) {
			return next(CustomErrorHandler.notFound());
		}
		const { firstname, lastname } = req.body;
	
		try {
			const result = await User.findOneAndUpdate(
				{ _id: user._id },
				{
					$set: {
						firstname: firstname,
						lastname: lastname,
						profilePhoto: req.file.filename,
					},
				}
			);
			// res.json(result);
			res.json({
				statusCode: 200,
				msg: 'profile updatde',
				profileUrl:`http://localhost:2020/profile/${req.file.filename}`,
			});
		} catch (err) {
			return next(err);
		}
	},

	// get all user
	async getUser(req, res, next) {
		try {
			const allUser = await User.find();
			res.json(allUser);
		} catch (err) {
			return next(err);
		}
	},

	// get user with id
	async getUserById(req, res, next) {
		const getuser = await User.findOne({ _id: req.user._id });
		if (!getuser) {
			return next(CustomErrorHandler.notFound());
		}

		try {
			const user = await User.findById({ _id: getuser._id });
			// console.log(user);
			res.json(user);
		} catch (err) {
			return next(err);
		}
	},

	// change password
	async changePassword(req, res, next) {
		// password validation
		const passwordSchema = Joi.object({
			password: Joi.string().required(),
			newPass: Joi.string()
				.pattern(new RegExp('^[a-zA-Z0-9]{3,20}$'))
				.required(),
			confPass: Joi.ref('newPass'),
		});

		const { error } = passwordSchema.validate(req.body);

		if (error) {
			res.json({
				statusCode: 400,
				message: 'password and confirm password is not match',
			});
		}

		try {
			// change password logic here
			const getuser = await User.findOne({ _id: req.user._id });
			if (!getuser) {
				return next(CustomErrorHandler.notFound());
			}

			const { password, newPass } = req.body;
			const hashedPassword = await bcrypt.hash(newPass, 10);
			const user = await User.findById({ _id: getuser._id });

			// compare old and new password
			if (bcrypt.compareSync(password, user.password)) {
				await User.updateOne(
					{
						_id: getuser._id,
					},
					{ password: hashedPassword }
				);
				res.json({
					statusCode: 200,
					msg: 'password is change succesfully',
				});
			} else {
				res.json({
					statusCode: 400,
					msg: 'old password is wrong',
				});
			}
		} catch (err) {
			return next(err);
		}
	},

	// filter
	async filter(req, res, next) {
		const search = req.query.name;
		try {
			const data = await User.find({
				$or: [
					{
						firstname: { $regex: search, $options: '$i' },
					},
					{
						lastname: { $regex: search, $options: '$i' },
					},
				],
			});
			res.json(data);
		} catch (err) {
			res.json(err);
		}
	},
};

export default userController;

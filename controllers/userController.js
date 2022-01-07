/** @format */
import { User } from '../models';
import bcrypt from 'bcrypt';
import Joi from 'joi';

const userController = {
	// update user
	async update(req, res, next) {
		// console.log(req.params.id);
		// console.log(req.file.filename);
		const id = req.params.id;
		const { firstname, lastname } = req.body;

		try {
			const result = await User.findOneAndUpdate(
				{ _id: id },
				{
					$set: {
						firstname: firstname,
						lastname: lastname,
						profilePhoto: req.file.filename,
					},
				}
			);
		} catch (err) {
			return next(err);
		}
		res.json({
			statusCode: 200,
			msg: 'profile updatde',
		});
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
		const id = req.params.id;
		// console.log(id);
		try {
			const user = await User.findById({ _id: id });
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

		// change password logic here

		const id = req.params.id;
		// console.log(id);

		const { password, newPass } = req.body;
		const hashedPassword = await bcrypt.hash(newPass, 10);
		const user = await User.findById({ _id: id });

		// compare old and new password
		try {
			if (bcrypt.compareSync(password, user.password)) {
				await User.updateOne(
					{
						_id: id,
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

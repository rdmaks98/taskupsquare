/** @format */
import JwtService from '../services/JwtServices';

const authenticate = async (req, res, next) => {
	const settoken = req.cookies.access_token;
	// console.log('token', settoken);
	if (!settoken) {
		res.json({
			statusCode: 403,
			message: 'aun authorized',
		});
	}

	try {
		const { _id } = await JwtService.verify(settoken);
		// console.log('id', _id);
		const user = {
			_id,
		};
		req.user = user;
		next();
	} catch (err) {
		res.json({
			statusCode: 403,
			message: 'aun authorized',
		});
	}
};

export default authenticate;

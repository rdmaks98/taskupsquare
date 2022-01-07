/** @format */

import express from 'express';
const authenticate = require('../middlewares/authenticate');
const router = express.Router();

router.get('/search', authenticate, (req, res) => {
	console.log(searchuser);
	res.send('hello');
});

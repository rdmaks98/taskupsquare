/** @format */
import Jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';
import { User } from '../models/';
var express = require('express');
var app = express();
var cookies = require('cookie-parser');

app.use(cookies());

const authenticate = (req, res, next) => {
	console.log(1248457840);
	const { tokens } = req.cookies;
	console.log(tokens);
};

export default authenticate;

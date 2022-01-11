/** @format */

const nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 587,
	secure: false,
	requireTLS: true,
	auth: {
		user: 'tommickey101@gmail.com',
		pass: 'Tom@1999',
	},
});

var mailOptions = {
	from: '<tommickey@gmail.com> ',
	to: 'rinkymakvana7@gmail.com',
	subject: 'nodemailer class testing',
	text: 'hello from nodemailer to jerrytom',
};

transport.sendMail(mailOptions, function (err, info) {
	if (err) {
		console.log(err);
	} else {
		console.log('mail send success', info.response);
	}
});

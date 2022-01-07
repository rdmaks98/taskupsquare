/** @format */

import express from 'express';
import multer from 'multer';
import {
	registerController,
	loginController,
	forgotpasswordController,
	resetpasswordController,
	userController,
} from '../controllers';

import authenticate from '../middlewares/authenticate';

const router = express.Router();

// user image
router.use(express.static(__dirname + './public/'));

var Storage = multer.diskStorage({
	destination: './public/uploads',
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname);
	},
});

var upload = multer({
	storage: Storage,
}).single('profilePhoto');

// Authentication
router.post('/register', registerController.register);
router.post('/login', loginController.login);

// control particular user
router.put('/update-profile/:id', upload, userController.update);
router.get('/getuser/:id', authenticate, userController.getUserById);

// change password
router.post('/change-password/:id', userController.changePassword);

// control all user
router.get('/', userController.getUser);

// search user with firstname and lastname
router.get('/search-user', userController.filter);

// forgot password
// router.post('/forgot-password', forgotpasswordController.forgotPassword);

export default router;

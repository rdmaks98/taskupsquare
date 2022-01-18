/** @format */

import express from 'express';
import mongoose from 'mongoose';
import { APP_PORT, DB_URL } from './config';
import errorHandler from './middlewares/errorHandler';
const app = express();
import cookieParser from 'cookie-parser';
app.use(cookieParser());
import routes from './routes';

const cors = require("cors");
const corsOptions = {
	origin: '*',
	credentials: true,            //access-control-allow-credentials:true
	optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
// databse coonection

// option 1
// mongoose.connect(
//     DB_URL,
//     async(err)=>{
//         if(err) throw err;
//         console.log("conncted to db")
//     }
// )

// option 2
mongoose.connect(DB_URL, {
	// useCreatendex: true,
	// useFindAndModify: false,
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
	console.log('yes you are connecting in the database');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);
app.use('/api', routes);
app.listen(APP_PORT, () => {
	const url = `http://localhost:${APP_PORT}/api/`;
	console.log(url);
});

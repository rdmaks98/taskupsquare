/** @format */

import './App.css';
import Component from './component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from "./Pages/user";
import Index from "./Pages/";
import Footer from "./component/footer";
import Header from './component/Header';
import Register from "./Pages/auth/register"
import Login from "./Pages/auth/login"
import Password from "./Pages/auth/Password";
import Profile from "./Pages/auth/profile"

function App() {
	return (
		<div className='App'>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Index/>} />
					<Route path="/user" element={<User />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/Password" element={<Password />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
				<Footer/>
			</Router>
		</div>
	);
}

export default App;

/** @format */

import React from 'react';
import Header from './Header';
import TimeLine from "./TimeLine";
import Blog from "./blog"
import Contact from "./contact";

const index = () => {
	return (
		<div>
			<Header/>
			<TimeLine/>
			<Blog/>
			<Contact/>
		</div>
	);
};

export default index;

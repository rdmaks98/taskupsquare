/** @format */

import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

const header = () => {
	return (
		<div>
			<AppBar>
				<Container maxWidth='xxl'>
					<Toolbar>
						<Typography
							variant='h4'
							noWrap
							component='div'
							sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
							LOGO
						</Typography>
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	);
};

export default header;

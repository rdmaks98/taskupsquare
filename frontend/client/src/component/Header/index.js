/** @format */

import React from 'react';
import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar,Tooltip,Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import PasswordTwoToneIcon from '@mui/icons-material/PasswordTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';

const Header = () => {

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

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
						<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick=""
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
						</Box>
						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
						>
							LOGO
						</Typography>
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							<Button sx={{ my: 2, color: 'white', display: 'block' }}>Home</Button>
							<Button sx={{ my: 2, color: 'white', display: 'block' }}>User</Button>
						</Box>
						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title="Open Profile">
								<IconButton aria-controls={open ? 'basic-menu' : undefined}
									aria-haspopup="true"
									aria-expanded={open ? 'true' : undefined}
									onClick={handleClick} sx={{ p: 0 }}>
									<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
								</IconButton>
							</Tooltip>
							
							<Menu
								id="basic-menu"
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}
								MenuListProps={{
									'aria-labelledby': 'basic-button',
								}}
							>
								<MenuItem onClick={handleClose}><AssignmentIndTwoToneIcon /> Register</MenuItem>
								<MenuItem onClick={handleClose}><VpnKeyTwoToneIcon />  Login</MenuItem>
								<MenuItem onClick={handleClose}><AccountCircleTwoToneIcon /> Profile</MenuItem>
								<MenuItem onClick={handleClose}><PasswordTwoToneIcon /> Change Password</MenuItem>
								<MenuItem onClick={handleClose}><LockTwoToneIcon /> Logout</MenuItem>
							</Menu>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	);
};

export default Header;

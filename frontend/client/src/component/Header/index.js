/** @format */

import React from 'react';
import { AppBar, Avatar, Box, Button, CardMedia, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import PasswordTwoToneIcon from '@mui/icons-material/PasswordTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import { Link } from 'react-router-dom';
const Header = () => {
	const a = {
		color: "white",
		textDecoration: "none",
	}

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
			<AppBar style={{ backgroundColor: "#175C19" }}>
				<Container maxWidth='xxl'>
					<Toolbar>

						<Typography
							variant='h4'
							noWrap
							component='div'
							sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
							<CardMedia component="img" height="90" image="/images/logo.png" alt="contact field" />
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
							sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
							<CardMedia component="img" height="60" image="/images/logo.png" alt="contact field"/>
						</Typography>

						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

							<Button sx={{ my: 2, display: 'block' }}><Link style={a} to="/">Home</Link></Button>
							<Button sx={{ my: 2, display: 'block' }}><Link style={a} to="/user">User</Link></Button>
							<a style={a} href="#contact"><Button sx={{ my: 2, color: 'white', display: 'block' }}>Contact</Button></a>

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
								<MenuItem onClick={handleClose}><AssignmentIndTwoToneIcon color="success" /> <Link style={{ textDecoration: "none", color: "#175C19" }} to="/register"> Register</Link></MenuItem>
								<MenuItem onClick={handleClose}><VpnKeyTwoToneIcon color="success" /><Link style={{ textDecoration: "none", color: "#175C19" }} to="/login"> Login</Link></MenuItem>
								<MenuItem onClick={handleClose}><AccountCircleTwoToneIcon color="success" />
									<Link style={{ textDecoration: "none", color: "#175C19" }} to="/profile"> Profile</Link></MenuItem>
								<MenuItem onClick={handleClose}><PasswordTwoToneIcon color="success" /><Link style={{ textDecoration: "none", color: "#175C19" }} to="/Password">Change Password</Link></MenuItem>
								<MenuItem onClick={handleClose}><LockTwoToneIcon color="success" /> Logout</MenuItem>
							</Menu>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	);
};

export default Header;
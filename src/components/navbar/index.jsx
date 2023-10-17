/** @format */

import { Button, Container, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PlayListAddForm from "../playlist-add";
import { useState } from "react";


const NavBar = ({ getPlaylistById }) => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handelSubmit = playlistId => {
		getPlaylistById(playlistId);
	};

	return (
		<AppBar
			position='static'
			color='default'
		>
			<Container maxWidth='xl'>
				<Toolbar>
					<Stack sx={{ flexGrow: 1 }}>
						<Typography variant='h6'>Clean Youtube</Typography>

						<Typography variant='body1'>by - MG Rakib</Typography>
					</Stack>
					<Button
						onClick={handleClickOpen}
						variant='contained'
					>
						Add PlayList
					</Button>
				</Toolbar>
				<PlayListAddForm
					open={open}
					handleClose={handleClose}
					handelSubmit={handelSubmit}
				/>
			</Container>
		</AppBar>
	);
};

export default NavBar;

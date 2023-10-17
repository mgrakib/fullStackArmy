/** @format */
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

const PlayListAddForm = ({ open, handleClose, handelSubmit }) => {
	const [state, setState] = useState("");
	const handelGetPlaylistId = () => {
		handelSubmit(state);
	};
	return (
		<div>
			<Dialog
				open={open}
				onClose={handleClose}
			>
				<DialogTitle>Add Playlist ID</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Please provide Playlist Id or Playlist Link. Be careful
						about playlist link if you provide an invalid like we
						won't be able to load playlist.
					</DialogContentText>
					<TextField
						autoFocus
						margin='dense'
						label='Playlist'
						fullWidth
						variant='standard'
						onChange={e => setState(e.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button
						onClick={() => {
							handelGetPlaylistId(), handleClose();
						}}
					>
						Add PlaylistID
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};
 
export default PlayListAddForm;
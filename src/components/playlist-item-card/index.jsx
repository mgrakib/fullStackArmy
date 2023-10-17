/** @format */


import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import { PlayCircle, PlayCircleOutline } from "@mui/icons-material";


const PlayListItemCard = ({ channelThumbnail, playListTitle }) => {
    console.log(playListTitle);
	return (
		<Card
			sx={{
				maxWidth: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				cursor:'pointer'
			}}
		>
			<CardMedia
				component='img'
				height='194'
				image={channelThumbnail?.url}
				alt={playListTitle}
			/>
			<CardContent>
				<Typography
					variant='body1'
					color=''
				>
					{playListTitle}
				</Typography>
			</CardContent>
			<Box sx={{ marginTop: "auto" }}></Box>
			<CardActions disableSpacing>
				<Stack
					direction={"row"}
					spacing={1}
				>
					<PlayCircleOutline color='primary' />
					<Typography color='primary'>Show Video</Typography>
				</Stack>
			</CardActions>
		</Card>
	);
};

export default PlayListItemCard;
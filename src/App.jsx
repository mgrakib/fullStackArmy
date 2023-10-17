/** @format */

import { Container, CssBaseline, Grid } from "@mui/material";
import NavBar from "./components/navbar";
import PlayListItemCard from "./components/playlist-item-card";
import usePlayList from "./hooks/usePlaylist";

const App = () => {
  const { playList, getPlaylistById } = usePlayList();
  const playListArr = Object.values(playList);
  console.log(playListArr, playList);
	return (
		<div>
			<CssBaseline />
			<NavBar getPlaylistById={getPlaylistById} />

			<Container
				maxWidth='lg'
				sx={{ marginY: 3 }}
			>
				<Grid
					container
					spacing={2}
				>
					{playListArr.map(item => (
						<Grid
							key={item.channelId}
							item
							xs={6}
							md={4}
						>
							<PlayListItemCard
								channelThumbnail={item.channelThumbnail}
								playListTitle={item.playListTitle}
							/>
						</Grid>
					))}
				</Grid>
			</Container>
		</div>
	);
};

export default App;

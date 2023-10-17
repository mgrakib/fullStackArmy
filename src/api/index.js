/** @format */

import axios from "axios";
const key = import.meta.env.VITE_YOUTUBE_API_KEY;
const getPlayListItem = async (playListID, pageToken="", result = []) => {
	
	const URL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&playlistId=${playListID}&part=contentDetails,snippet&maxResults=50&pageToken=${pageToken}`;

    const { data } = await axios.get(URL);
    

    result = [...result, ...data.items];
    if (data.nextPageToken) {
        result = await getPlayListItem(playListID, data.nextPageToken, result);
    }
    return result
};

export const getPlayList =async (playlistId="") => {
    const URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${key}`;

    const { data } = await axios.get(URL);

   const {
		channelId,
		title: playListTitle,
		description: channelDescription,
		thumbnails,
		channelTitle,
   } = data.items[0].snippet;
    
    let playListItems =await getPlayListItem(playlistId);
    
        playListItems.map(item => {
		const {
			title,
			description,
			
			thumbnails: { medium },
		} = item.snippet;
		

		return {
			videoTitle:title,
			videoDescription:description,
			videoThumbnail:medium,
			contentDetails: item.contentDetails,
		};
   });

    

    
    return {
		channelId,
		channelTitle,
		channelDescription,
		channelThumbnail: thumbnails.high,
		playListTitle,
		playListItems,
	};

}


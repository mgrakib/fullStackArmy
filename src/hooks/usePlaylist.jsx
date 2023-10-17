import { useState } from "react";
import { getPlayList } from "../api";

const usePlayList = () => {
	const [state, setState] = useState({
		playList: {},
		favorites: [],
		recentPlayList:[]
	})

	const [error, setError] =  useState('')
	const [loading, setLoading] =  useState('')

	const getPlaylistById =async (playListId, force=false) => {
		if (state.playList[playListId] && !force) {
			return;
		}
		setLoading(true);
		try {
			const playlist = await getPlayList(playListId)
			setState(prev => ({
				...prev,
				playList: {
					...prev.playList,
					[playListId] : playlist

				}
			}));
			setError('')
		} catch (e) {
			setError(e?.response?.data?.error?.message);
			
		} finally {
			setLoading(false);
		}

		
	}

	const addToFavorite = (playListId) => {
		setState(pre => ({
			...pre,
			favorites: [...pre.favorites, playListId]
		}))
	}

	const addToRecentPlayList = (playListId) => {
		setState(pre => ({
			...pre,
			recentPlayList: [...pre.recentPlayList, playListId]
		}))
	}


	return {
		playList: state.playList,
		favorites: state.favorites,
		recentPlayList: state.recentPlayList,
		getPlaylistById,
		addToFavorite,
		addToRecentPlayList,
	};
}
export default usePlayList;




// {
// 	playlistID: {
// 		items: [],
// 			chnnelID: asfsdf,
// 			chentimeL: 'asfdsaf'
// 		contentDetails: asfsdf
// 	}
// }
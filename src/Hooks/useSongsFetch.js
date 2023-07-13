import { useState, useEffect } from 'react';
// API
import API from '../API';

const initialState = {
	songs: [],
};

export const useSongsFetch = () => {
	const [state, setState] = useState(initialState);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetchSongs = async () => {
		try {
			setError(false);
			setLoading(true);

			const songs = await API.fetchSongs();

			setState(songs);
			console.log(songs);
		} catch (error) {
			setError(true);
		}
		setLoading(false);
	};

	// Initial Render and Search
	useEffect(() => {
		// setState(initialState);
		fetchSongs();
	}, []);

	return { state, loading, error };
};

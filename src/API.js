import axios from 'axios';

import { SONGS_BASE_URL, ARTISTS_BASE_URL } from './config';

const defaultConfig = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
};

const apiSettings = {
	fetchSongs: async () => {
		const endpoint = `${SONGS_BASE_URL}`;
		return (await fetch(endpoint)).json();
	},
	fetchArtists: async (artistID) => {
		const endpoint = `${ARTISTS_BASE_URL}${artistID}`;
		return await (await fetch(endpoint)).json();
	},
};

export default apiSettings;

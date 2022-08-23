import { useState, useEffect } from "react";
import axios from "axios";
// API
import API from "../API";

export const useSongsFetch = (songID) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetchSongs();
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const fetchSongs = async () => {
    const request = await axios.get("http://localhost:4000/api/songs/");
    setState(request);
  };

  return { state };
};

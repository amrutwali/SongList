import { useState, useEffect } from "react";
import axios from "axios";
// API
import API from "../API";

export const useSongsFetch = (songID) => {
  const [state, setState] = useState([]);

  // useEffect(() => {

  // }, []);

  useEffect(() => {
    let fetch = true;
    const fetchSongs = async () => {
      const request = await axios.get("http://localhost:4000/api/songs/");
      if (fetch) setState(request);
      console.log(request);
    };
    fetchSongs();
    return () => {
      fetch = false;
    };
  }, []);

  return { state };
};

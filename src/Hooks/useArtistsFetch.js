import { useState, useEffect } from 'react'
// API
import API from '../API'

const initialState = {
  artists: [],
}

export const useArtistsfetch = () => {
  const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchArtists = async () => {
    setLoading(true)
    setError(false)
    try {
      const artists = await API.fetchArtists()
      setState(artists)
      console.log(artists)
      sessionStorage.setItem('artists', JSON.stringify(artists))
    } catch (error) {
      setError(true)
      console.log(error)
    }
    setLoading(false)
  }

  // Initial render and search

  useEffect(() => {
    fetchArtists()
  }, [])

  return { state, loading, error }
}

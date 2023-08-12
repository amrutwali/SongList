import React from 'react'
// components
import Song from '../Song'
// hooks
import { useSongsFetch } from '../../Hooks/useSongsFetch'
// styles
import './index.css'
// data
import songs from '../../Constants/songs.json'

const Songs = () => {
  // const { state, loading, error } = useSongsFetch()

  return (
    <div className='songs max-width'>
      <h1>Song List</h1>
      <p>Here are a list of all the songs in the database</p>
      <div className='list'>
        {// !loading &&
          songs.songs.map(song => {
            return (
              <Song
                key={song._id}
                title={song.title}
                url={song.url}
                artists={song.artist}
                rating={song.rating}
              />
            )
          })}
      </div>
    </div>
  )
}

export default Songs

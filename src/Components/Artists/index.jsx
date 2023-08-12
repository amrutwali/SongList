import React from 'react'
// components
import Artist from '../Artist'
// hooks
import { useArtistsfetch } from '../../Hooks/useArtistsFetch'
// styles
import './index.css'
// constants
import artists from '../../Constants/artists.json'

const Artists = () => {
  // const { state, loading, error } = useArtistsfetch()

  return (
    <div className='max-width artists'>
      <h1>Artist List</h1>
      <p>Here are a list of all the artists in the database</p>
      <div className='list'>
        {//loading
          //? 'loading' :
          artists.artists.map(artist => {
            return (
              <Artist
                key={artist._id}
                firstname={artist.firstname}
                lastname={artist.lastname}
                url={artist.url}
              />
            )
          })}
      </div>
    </div>
  )
}

export default Artists

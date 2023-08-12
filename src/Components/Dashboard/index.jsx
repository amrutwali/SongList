import React from 'react'
// components
import ArtistForm from '../ArtistForm'
import SongForm from '../SongForm'
// styles
import './index.css'

const Dashboard = () => {
  return (
    <div className='dashboard max-width'>
      <h1>Dashboard</h1>
      <div className='form-grid'>
        <ArtistForm></ArtistForm>
        <SongForm></SongForm>
      </div>
    </div>
  )
}

export default Dashboard

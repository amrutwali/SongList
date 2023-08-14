import React from 'react'
import InputTag from '../InputTag'
import Select from '../Select'

const SongForm = () => {
  return (
    <form className='form'>
      <h2>Add Song</h2>
      <div className='inputContainer'>
        <label htmlFor='title'>Song Title *</label>
        <input
          name='title'
          type='title'
          placeholder='Some Song'
          required={true}
        />
      </div>
      <div className='inputContainer'>
        <label htmlFor='cars'>Artist(s) *</label>
        <InputTag />
      </div>

      <div className='inputContainer'>
        <label htmlFor='date'>Release Date</label>
        <input name='date' type='date' />
      </div>
      <div className='inputContainer'>
        <label htmlFor='url'>Image URL</label>
        <input name='url' type='url' placeholder='https://www.image-cdn.com' />
      </div>
      <div className='inputContainer'>
        <label htmlFor='genre'>Genre</label>
        <Select options={[
          'Electronic Dance Music',
          'Rock',
          'Jazz',
          'Dubstep',
          'Rhythm and Blues',
          'Country Music',
          'Pop Music',
        ]} name={'genre'} />
      </div>
      <button type='submit'>Add Song</button>
    </form>
  )
}

export default SongForm

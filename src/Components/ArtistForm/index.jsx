import React from 'react'

const ArtistForm = () => {
  return (
    <form className='form'>
      <h2>Add Artist</h2>
      <div className='inputContainer'>
        <label htmlFor='name'>First Name</label>
        <input name='name' type='name' placeholder='John' required={true} />
      </div>
      <div className='inputContainer'>
        <label htmlFor='lastName'>Last Name</label>
        <input name='lastName' placeholder='Doe' />
      </div>
      <div className='inputContainer'>
        <label htmlFor='url'>Image URL</label>
        <input name='url' type='url' placeholder='https://www.image-cdn.com' />
      </div>
      <button type='submit'>Add Artist</button>
    </form>
  )
}

export default ArtistForm

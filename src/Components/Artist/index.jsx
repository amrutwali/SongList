import React from "react"

const Artist = ({
  firstname,
  lastname,
  url = 'https://cdn.vectorstock.com/i/preview-1x/48/06/image-preview-icon-picture-placeholder-vector-31284806.jpg',
}) => {
  return (
    <div className='card'>
      <img src={url} />
      <p>{lastname === '' ? `${firstname}` : `${firstname} ${lastname}`}</p>
    </div>
  )
}

export default Artist

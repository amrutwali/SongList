import React, { Fragment, useState, useRef } from 'react'
import { useArtistsfetch } from '../../Hooks/useArtistsFetch'

const InputTag = () => {
  // const { state, loading, error } = useArtistsfetch()
  const [value, setValue] = useState('')
  const [tagList, setTagList] = useState([])
  const inputRef = useRef();

  const artists = JSON.parse(sessionStorage.getItem('artists'))
  const filteredList = artists.artists.filter(item => !tagList.includes((item.firstname + ' ' + item.lastname).trim()) && (item.firstname.toLowerCase().includes(value.toLowerCase()) || item.lastname.toLowerCase().includes(value.toLowerCase())))

  const handleSelect = (e) => {
    if (!tagList.includes(e.target.innerText)) setTagList([...tagList, e.target.innerText])
    setValue('');
  }

  const handleRemove = (e) => {
    e.stopPropagation();
    setTagList(tagList.filter(item => item !== e.target.innerText))
  }

  return (
    <Fragment>
      <div className='tag-container' onClick={() => inputRef.current.focus()}>
        {tagList.map((item, index) => {
          return <div className='tag' key={index} onClick={handleRemove}>{item}</div>
        })}
        <input
          className='tag-input'
          placeholder='Artist'
          value={value}
          ref={inputRef}
          onChange={e => setValue(e.target.value)}
        />
      </div>
      {value && filteredList.length !== 0 && (
        <div className='tag-popup'>
          <ul>
            {filteredList.map((item, index) => {
              return <li key={index} onClick={handleSelect}>{`${item.firstname} ${item.lastname}`}</li>
            })}
          </ul>
        </div>
      )}
    </Fragment>
  )
}

export default InputTag

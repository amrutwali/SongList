import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// components
import Home from './Components/Home'
import Songs from './Components/Songs'
import Artists from './Components/Artists'
import NotFound from './Components/NotFound'
import Dashboard from './Components/Dashboard'
// styles
import './App.css'
import twitterX from './Assets/icons/twitterx.svg'
import github from './Assets/icons/github-mark.svg'
// constants
import songs from './Constants/songs.json'
import artists from './Constants/artists.json'

function App() {

  const handleMenuToggle = () => {
    const button = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.navlist');

    const visible = menu.getAttribute('data-visible')

    if (visible === 'false') {
      menu.setAttribute('data-visible', true)
      button.setAttribute('aria-expanded', true)
    } else {
      menu.setAttribute('data-visible', false)
      button.setAttribute('aria-expanded', false)
    }
  }

  // update local storage with constant data
  sessionStorage.setItem('artists', JSON.stringify(artists))
  sessionStorage.setItem('songs', JSON.stringify(songs))

  return (
    <BrowserRouter>
      <header className='head'>
        <nav className='max-width' >
          <Link className='site-header' to='/'>
            Song<span>ify</span>
          </Link>
          <button className='hamburger-menu color-filter' aria-controls='navlist' aria-expanded='false' onClick={handleMenuToggle}></button>
          <ul id='navlist' className='navlist' data-visible='false' onClick={handleMenuToggle}>
            <li>
              <Link to='/songs'>Songs</Link>
            </li>
            <li>
              <Link to='/artists'>Artists</Link>
            </li>
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/songs/:id' element={<Songs />} />
        <Route path='/songs' element={<Songs />} />
        <Route path='/artists' element={<Artists />} />
        <Route path='/artists/:id' element={<Artists />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <footer className='footer '>
        <div className='footer-content max-width'>
          <div className='footer-logo'>Made by amrutwali</div>
          <div className='socials'>
            <div className='icons'>
              <a href='https://github.com/amrutwali'>
                <img src={github} className='color-filter'></img>
              </a>
              <a href='https://www.twitter.com/amrutwali'>
                <img src={twitterX} className='color-filter'></img>
              </a>
            </div>
            <a href='mailto:amrutwali@gmail.com'>amrutwali@gmail.com</a>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  )
}

export default App

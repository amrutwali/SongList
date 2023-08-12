import React, { useState, useEffect } from 'react'
import useScrollListener from './Hooks/useScrollListener'
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

function App() {
  const [navClassList, setNavClassList] = useState([])
  const scroll = useScrollListener()

  // update classList of nav on scroll
  useEffect(() => {
    const _classList = []

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push('nav-bar--hidden')

    setNavClassList(_classList)
  }, [scroll.y, scroll.lastY])

  return (
    <BrowserRouter>
      <header className={navClassList.join(' ')}>
        <nav className='max-width'>
          <Link className='site-header' to='/'>
            Song<span>ify</span>
          </Link>
          <ul>
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

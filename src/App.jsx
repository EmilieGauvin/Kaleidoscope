import { useState, useEffect } from 'react'
import Experience from './Experience/Experience'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const experience = new Experience()

  useEffect(() =>{
    if (darkMode === false)
    {
      experience.lightMode()
    }
    if (darkMode === true)
    {
      experience.darkMode()
    }
  }, [darkMode])

  const handleClick = () =>
  {
    setDarkMode(!darkMode)
  }
  

  return (
    <div className={darkMode === false ? 'App light-mode' : 'App dark-mode'}>
      <div className='text'>
        <h1>Kaleidoscope gradient</h1>
        <h2>Inspired by the physics of kaleidoscopes, a slowly evolving gradient built in Three.js. <br/>Click and drag to play with the gradient.</h2>
        
      </div>
      <div className='bottom'>
        <p >visit portfolio at <a className='textButton' href='http://emiliegauvin.com/' target="_blank"><i>emiliegauvin.com</i></a></p>
        <button  onClick = {handleClick}>{darkMode === false ? 'Switch to dark mode' : 'Switch to light mode'}</button>
      </div>
    </div>
  )
}

export default App

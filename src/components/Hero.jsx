import React from 'react'

import '../styles/scss/_hero.scss'


const Hero = () => {
  return (
    <div className='hero_container'>
        <img src='https://i.imgur.com/6dJcYGn.png' alt=''></img>
        <div className='text'>
            <h1>Make remote work</h1>
            <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar</p>
        </div>
        <button>Learn more</button>
    </div>
  )
}

export default Hero
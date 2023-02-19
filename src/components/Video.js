import React from 'react'
import { Link } from 'react-router-dom'
import './Video.css'

import SpaceVideo from '../assets/space-video.mp4'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={SpaceVideo} type='video/mp4' />
        </video>
        <div className='content'>
            <h1>Galaxy, Travel</h1>
            <p>World's first civilian space Travel</p>
            <div>
                <Link  className='btn'>Training</Link>
                <Link  className='btn'>Launch</Link>
            </div>
        </div>
    </div>
  )
}

export default Video
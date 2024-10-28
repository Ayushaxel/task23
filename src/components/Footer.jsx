import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
     <p>Upskill Mafia All resversed</p>
    <Link to="signup"> <button className='register'>Register for free</button></Link>
    </footer>
  )
}

export default Footer
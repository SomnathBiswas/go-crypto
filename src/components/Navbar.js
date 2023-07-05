import React from 'react'
import {FaCoins} from 'react-icons/fa'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
                <FaCoins className='icon'  />
                <h1> Go <span className='purple'> Crypto</span></h1>
            </div>
    </div>
  )
}

export default Navbar

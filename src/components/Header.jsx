import React from 'react'
import { Link } from 'react-router-dom'
import gif from '../images/gallery.gif'

const Header = () => {
    return (
        <div className='header'>
            <Link className='header-link' to='/'>Home</Link>
            <img src={gif} alt="" className='header-img' />
            <Link className='header-link' to='/random'>Random</Link>
        </div>
    )
}

export default Header

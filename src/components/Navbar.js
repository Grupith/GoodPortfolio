import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src='/HouseFavicon.png' alt='Home Icon' className='logo' />
        <ul className='navbarPages'>
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar;
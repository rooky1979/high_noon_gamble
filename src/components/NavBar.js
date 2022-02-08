import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as CloseMenu } from '../assets/x.svg';
import { ReactComponent as MenuIcon } from '../assets/menu.svg';

export default function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className='header'>
      <div className='logo-nav'>
        <div className='logo-container'>
          <NavLink to='/' exact>
            <img className='logo' src='HNG.png' alt='HNG Logo' />
          </NavLink>
        </div>
        <div className={click ? 'nav-options active' : 'nav-options'}>
          <NavLink to='/tools' className='option' onClick={closeMobileMenu}>
            Tools
          </NavLink>
          <NavLink to='/readings' className='option' onClick={closeMobileMenu}>
            Readings
          </NavLink>
          <NavLink
            to='/format'
            className='option'
            onClick={closeMobileMenu}
          >
            Meeting Format
          </NavLink>
          <NavLink to='/chat' className='option' onClick={closeMobileMenu}>
            Post In Chat
          </NavLink>
        </div>
      </div>
      <div className='mobile-menu' onClick={handleClick}>
        {click ? (
          <CloseMenu className='menu-icon' />
        ) : (
          <MenuIcon className='menu-icon' />
        )}
      </div>
    </div>
  );
}

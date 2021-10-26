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
          <NavLink to='/cliches' className='option' onClick={closeMobileMenu}>
            101 Common Cliches
          </NavLink>
          <NavLink
            to='/additionalcliches'
            className='option'
            onClick={closeMobileMenu}
          >
            101 Additional Cliches
          </NavLink>
          <NavLink to='/mymind' className='option' onClick={closeMobileMenu}>
            My Mind Is Out To Get Me
          </NavLink>
          <NavLink
            to='/sobercards'
            className='option'
            onClick={closeMobileMenu}
          >
            Sober Cards
          </NavLink>
          <NavLink to='/bbcards' className='option' onClick={closeMobileMenu}>
            Big Book Cards
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

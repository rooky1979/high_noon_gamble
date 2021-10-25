import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className='header'>
      <div>
        <nav>
          <NavLink to='/' exact>
            <img className='Logo' src='HNG.png' alt='HNG Logo' />
          </NavLink>
          <NavLink to='/cliches'>101 Common Cliches</NavLink>
          <NavLink to='/additionalcliches'>101 Additional Cliches</NavLink>
          <NavLink to='/mymind'>My Mind Is Out To Get Me</NavLink>
          <NavLink to='/sobercards'>Sober Cards</NavLink>
          <NavLink to='/bbcards'>Big Book Cards</NavLink>
        </nav>
      </div>
    </header>
  );
}

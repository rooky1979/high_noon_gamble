import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <div className='home-container'>
        <img className='home-img' src='HNGHome.png' alt='Welcome to High Noon Gamble' />
      </div>
      <div className='books'>
        <NavLink to='/cliches'>
          <img className='book' src='101cliches.jpg' alt='101 cliches' />
        </NavLink>
        <NavLink to='/additionalcliches'>
          <img
            className='book'
            src='101additional.jpg'
            alt='101 additional cliches'
          />
        </NavLink>
        <NavLink to='/mymind'>
          <img
            className='book'
            src='mindout.jpg'
            alt='My mind is out to get me'
          />
        </NavLink>
        <NavLink to='/sobercards'>
          <img className='book' src='sobercards.png' alt='sober cards' />
        </NavLink>
        <NavLink to='/bbcards'>
          <img className='book' src='bbcards.png' alt='big book cards' />
        </NavLink>
      </div>
    </main>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Tools() {
  return (
    <main>
      <div className='tools-img-container'>
        <img className='tools-img' src='tools.png' alt='Welcome to High Noon Gamble' />
      </div>
      <div className='books'>
        <NavLink to='/cliches'>
          <img className='cliche-book' src='101cliches.jpg' alt='101 cliches' />
        </NavLink>
        <NavLink to='/additionalcliches'>
          <img
            className='addcliche-book'
            src='101additional.jpg'
            alt='101 additional cliches'
          />
        </NavLink>
        <NavLink to='/mymind'>
          <img
            className='mymind-book'
            src='mindout.jpg'
            alt='My mind is out to get me'
          />
        </NavLink>
        <NavLink to='/sobercards'>
          <img className='sobercard-book' src='sobercards.png' alt='sober cards' />
        </NavLink>
        <NavLink to='/bbcards'>
          <img className='bbcard-book' src='bbcards.png' alt='big book cards' />
        </NavLink>
      </div>
    </main>
  );
}

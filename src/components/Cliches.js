import React from 'react';

export default function Cliches() {
  return (
    <main>
      <div className='book-container'>
        <img src='101cliches.jpg' alt='101 Common Cliches' />
      </div>
      <div className='form-textbox'>
        <input
          className='textbox mx-1'
          type='text'
          placeholder='Enter a cliche between 1-100'
          name='cliche'
        />
        <input type='submit' className='btn btn-primary' />
        <div className='btn btn-dark'>Random Cliche</div>
      </div>
    </main>
  );
}

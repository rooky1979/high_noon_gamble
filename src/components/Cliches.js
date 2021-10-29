import React from 'react';

export default function Cliches() {
  return (
    <main>
      <div className='book-container'>
        <img src='101cliches.jpg' alt='101 Common Cliches' />
      </div>
      <div className='form-textbox'>
        {/*text box for enter cliche number between 1-101 
        will need input validation
        , button for random cliche*/}
        <input
          className='textbox'
          type='text'
          placeholder='Enter a cliche between 1-100'
          name='cliche'
        />
        <input type='submit' className='btn btn-primary' />
      </div>
      <div className='buttons'>Click for Random Cliche</div>
    </main>
  );
}

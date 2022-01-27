import React from 'react';
import { sobercards } from '../sobercards';

export default function SoberCards() {
  return (
    <main>
      <div className='book-container'>
        <img className='sobercards-img' src='sobercards.png' alt='Sober Cards' />
      </div>
      <section className='card-container'>
        {sobercards.map((quote) => (
          <article className='card'>
            <h3>
              <i>{quote.id} - </i> {quote.quote}
            </h3>
          </article>
        ))}
      </section>
    </main>
  );
}

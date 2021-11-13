import React from 'react';
import { bbcards } from '../bbcards';

export default function BBCards() {
  return (
    <main>
      <div className='book-container'>
        <img src='bbcards.png' alt='Big Book Cards' />
      </div>
      <section className='card-container'>
        {bbcards.map((quote) => (
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

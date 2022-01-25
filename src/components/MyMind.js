import React from 'react';
import { mymind } from '../mymind';

export default function MyMind() {
  return (
    <main>
      <div className='book-container'>
        <img className='book-img' src='mindout.jpg' alt='My Mind Is Out To Get Me' />
      </div>
      <section className='card-container'>
        {mymind.map((quote) => (
          <article className='card'>
            <h3>
              {quote.id}. {quote.quote}
            </h3>
          </article>
        ))}
      </section>
    </main>
  );
}

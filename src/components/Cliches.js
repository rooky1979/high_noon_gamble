import React from 'react';
import { cliches } from '../cliches';

export default function Cliches() {
  return (
    <main>
      <div className='book-container'>
        <img className='cliche-img' src='101cliches.jpg' alt='101 Common Cliches' />
      </div>
      <section className='card-container'>
        {cliches.map((cliche) => (
          <article className='card'>
            <h3>
              {cliche.id}. {cliche.quote}
            </h3>
          </article>
        ))}
      </section>
    </main>
  );
}

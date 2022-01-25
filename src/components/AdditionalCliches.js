import React from 'react';
import { additional_cliches } from '../additional_cliches';

export default function AdditionalCliches() {
  return (
    <main>
      <div className='book-container'>
        <img className='cliche-img' src='101additional.jpg' alt='101 Additional Common Cliches' />
      </div>
      <section className='card-container'>
        {additional_cliches.map((cliche) => (
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

import React from 'react';
import { cliches } from '../cliches';

const Quote = (quoteNumber) => {
  return <div key={quoteNumber}>{cliches.quote}</div>;
};

export default Quote;

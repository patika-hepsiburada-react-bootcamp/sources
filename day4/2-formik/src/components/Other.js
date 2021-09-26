import React from 'react';

function Other({ formValues }) {
  const keys = Object.keys(formValues);

  const filtered = keys
    .map((key) => (formValues[key] !== '' ? { [key]: formValues[key] } : null))
    .filter((data) => data !== null);

  return <pre>{JSON.stringify(filtered, null, 2)}</pre>;
}

export default Other;

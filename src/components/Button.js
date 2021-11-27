import React from 'react';

export default function Button({ children, ...props }) {
  console.log(`Button`);
  return <button {...props}>{children}</button>;
}

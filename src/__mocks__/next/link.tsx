// Example: Next.js Link component mock
import React from 'react';

const Link = ({ href, children, ...props }: any) => {
  return React.createElement(
    'a',
    {
      href,
      ...props,
    },
    children
  );
};

export default Link;

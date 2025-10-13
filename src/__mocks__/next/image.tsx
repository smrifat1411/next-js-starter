// Example: Next.js Image component mock
import React from 'react';

const Image = ({ src, alt, ...props }: any) => {
  return React.createElement('img', {
    src,
    alt,
    ...props,
  });
};

export default Image;

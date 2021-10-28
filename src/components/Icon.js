import React from 'react';

const Icon = ({ path, size }) => {
  return (
    <svg 
      width={size} 
      height={size}
    >
      <path d={path} />
    </svg>
  );
};

export default Icon;
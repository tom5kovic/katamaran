import React from 'react';

export const RightArrow = ({ width = 40, height = 40 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 1024 1024'
      class='icon'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z'
        fill='#000000'
      />
    </svg>
  );
};

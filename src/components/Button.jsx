import React from 'react';

function Button({onClick, children}) {
  return (
    <button onClick={onClick}className='bg-indigo-600 text-white py-2 px-6 my-10 rounded-lg hover:bg-indigo-400'>
      {children}
    </button>
  )
}

export default Button;

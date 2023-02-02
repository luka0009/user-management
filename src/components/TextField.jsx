import React from 'react';

export default function TextField({label, inputProps, onChange, value}) {
  return (
    <div className='flex flex-col'>
      <label className='mb-2 text-base text-gray-800'>{label}</label>
      <input 
      className='bg-gray-200 text-black py-2 px-3 border-1 outline-none'
      {...inputProps} 
      onChange = {onChange}
      value = {value}
      />
    </div>
  )
};

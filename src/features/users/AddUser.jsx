import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import { addUser } from './userSlice';
import {v4 as uuidv4} from 'uuid';

function AddUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState({
    name: '',
    email: '',
  });

  function handleAddUser() {
    dispatch(addUser({
      id: uuidv4(),
      name: value.name,
      email: value.email,
    }));
    setValue({
        name: '',
        email: '',
    });
    navigate('/');
  }

  return (
    <div className='mt-10 max-w-xl mx-auto'>
      <TextField 
      label = 'Name'
      value={value.name}
      onChange={(e) => setValue({...value, name: e.target.value})}
      inputProps={{ type: 'text', placeholder: 'Name' }}
      />
      <TextField 
      label = 'Email'
      value={value.email}
      onChange={(e) => setValue({...value, email: e.target.value})}
      inputProps={{ type: 'email', placeholder: 'Email' }}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  )
}

export default AddUser;

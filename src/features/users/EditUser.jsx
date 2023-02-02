import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import { editUser } from './userSlice';

export default function EditUser() {
    const dispatch = useDispatch();
    const params = useParams();
    const users = useSelector(store => store.users);
    const existingUser = users.filter(user => user.id === params.id);
    const {name, email} = existingUser[0];
    const navigate = useNavigate();
    const [value, setValue] = useState({
      name: name,
      email: email,
    });
  
    function handleEditUser() {
      dispatch(editUser({
        id: params.id,
        name: value.name,
        email: value.email,
      }))
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
        <Button onClick={handleEditUser}>Edit</Button>
      </div>
    )
};

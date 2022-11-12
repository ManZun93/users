import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({getUsers, userSelected, deselectUser}) => {

  const initialValues = {
    first_name:"",
    last_name: "",
    email: "",
    password:"",
    birthday: "",

  }
  const { register, handleSubmit , reset} = useForm();

  useEffect(()=> {
    if(userSelected){
      //console.log("selected")
      reset(userSelected)
    } else {
      reset(initialValues);
    }

  },[deselectUser])

  const submit = (data) => {

    console.log(data)
    if(userSelected){
      axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, data)
      .then(() => {
        getUsers()
        deselectUser()
      })
      .catch(error => console.log(error.response?.data));

    } else {
      axios.post('https://users-crud1.herokuapp.com/users/', data)
        .then(() => getUsers())
        .catch(error => console.log(error.response?.data));
    }
    
  }

  return (
    <form
    
      className='users-form'
      onSubmit={handleSubmit(submit)}
    > 
      <div className='header-users'>
        <h1>Users</h1>
        <p>Create, edit and delete the user that you need.</p>
      </div>
      <div className='input-container'>
        
          <label htmlFor="first_name" >
            <i className="fa-solid fa-circle-user edition-symbol"></i> {" "}
          </label>

        <div className='name-component'>
          <input {... register('first_name')}   type="text" id =  "first_name"  placeholder='First name'/>
          <label htmlFor="last_name"></label>
          <input {... register('last_name')} type="text" id =  "last_name"  placeholder='Last name'/>
        </div>
      </div>

      <div className='input-container'>
        <label htmlFor="email">
          <i className="fa-solid fa-envelope edition-symbol"></i>
        </label>
        <input {... register('email')} type="text" id =  "email" className='input-box' placeholder='Email'/>
      </div>

      <div className='input-container'>
        <label htmlFor="password">
          <i className="fa-solid fa-key edition-symbol"></i>
        </label>
        <input {... register('password')} type="password" id =  "password" className='input-box' placeholder='Password'/>
      </div>

      <div className='input-container'>
        <label htmlFor="birthday">
          <i className="fa-solid fa-cake-candles edition-symbol"></i>
        </label>
        <input {... register('birthday')} type="date" id = "birthday"  className='input-box'/>
      </div>

      <button className='submit-button'>SUBMIT</button>

    </form>
  );
};  

export default UsersForm;
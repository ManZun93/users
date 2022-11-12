import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './normalize.css'
import axios from 'axios'
import { useEffect } from 'react';
import UsersList from './components/UsersList'
import UsersForm from './components/UsersForm';
import { get, set } from 'react-hook-form';


function App() {
  const [usersList, setUsersList] = useState([]);

  const[userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsersList(res.data));
  }, [])

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsersList(res.data));
  }

  const selectUser = (user) => {
      setUserSelected(user)
  }

  const deselectUser = (user) => {
    setUserSelected(null)
  }

  const deleteUser = (id) =>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(() => getUsers())
  }
console.log(usersList)
  return (
    <div className="App">
      
      <div className='header-text'>
        
      </div>
      <UsersForm getUsers = {getUsers} userSelected = {userSelected} deselectUser= {deselectUser}/>
      <UsersList usersList = {usersList} selectUser = {selectUser} deleteUser={deleteUser}/>
      
      
    </div>
  )
}

export default App

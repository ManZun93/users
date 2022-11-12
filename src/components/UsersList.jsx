import React from 'react';

const UsersList = ({usersList, selectUser, deleteUser }) => {
  return (
   
    <ul className='users-list'>
      {usersList.map((user)=> (

        

        <li key = {user.id} className="user-card"> 

          <div>

            <p> 
              {" "} <b>{user.first_name} {" "} {user.last_name} </b> 
            </p>

            
             
           

            <p>
              <b>Email : </b>  {user.email}
            </p>

            <p>
              <b>Password :</b>  {user.password}
            </p>

            <p>
              <b><i className="fa-solid fa-cake-candles edition-symbol"></i> </b>   {user.birthday}
           </p>

          </div>

          <div className='buttons'>
            <button className='appearance2 edition-symbol' onClick={() => selectUser(user)}>
              <i className="fa-regular fa-pen-to-square"></i>
            </button>

            <button className='appearance edition-symbol' onClick={() => deleteUser(user.id)}>
            <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </li>
      ))}

    </ul>
  );
};

export default UsersList;
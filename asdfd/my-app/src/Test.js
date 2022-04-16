import React, { useEffect, useState } from 'react';
import Users from './Users';
import './Test.css'


const Test = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data =>setUsers(data));
    },[])
    return (
        <div> 
            <h1> This is test pages users: {users.length}</h1>
          <div className='user-container'>
          {
                users.map(user => <Users
                key={users.id}
                user={user}
                
                ></Users>)
            }
          </div>
        </div>
    );
};

export default Test;
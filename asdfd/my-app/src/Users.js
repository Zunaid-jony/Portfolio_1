import React from 'react';

const Users = (props) => {
    const{ id, name,phone, username, email} = props.user;
    const userstyle={
        border:'3px solid goldenrod',
        padding:'10px',
        borderRadius:'10px'
            
    }
    return (
       
        <div style={userstyle}>
            <h1> users name:{name}</h1>
            <p>User ID :{id}</p>
            <p>User ID :{phone}</p>
            <p>User ID :{username}</p>
            <button type="button" class="btn btn-primary">Primary</button>
            
            
        </div>
    );
};

export default Users;
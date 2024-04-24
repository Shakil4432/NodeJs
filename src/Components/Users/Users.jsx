import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function Users() {
    const loadedUsers = useLoaderData();
    console.log(loadedUsers)
    const [users, setUsers] = useState(loadedUsers);
    const handleClick = (id)=>{
      fetch(`http://localhost:5000/users/${id}`,{
        method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.deletedCount>0){
            alert('deleted successFully')
            const remaining = users.filter(user => user._id !== id)
            setUsers(remaining);
        }
      })
    }
  return (
    <div>
        {
            users.map(user=><p key={user._id}>{user.Email}<Link to={`/update/${user._id}`}><button>Update</button></Link><button onClick={()=>handleClick(user._id)}>X</button></p>)
        }
    </div>
  )
}

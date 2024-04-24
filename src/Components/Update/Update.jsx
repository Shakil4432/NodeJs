import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Update() {
    const userData = useLoaderData();
    console.log(userData)

    const handleUpdate=(event)=>{
        event.preventDefault();
        const Form = event.target;
        const Name = Form.name.value;
        const Email = Form.email.value;

        const updateUser = {Name, Email};
        console.log(updateUser);

        fetch(`http://localhost:5000/users/${userData._id}`, {
            method:'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                alert('user update successfully')
            }
        })
    }

    return (
        <div>
            <h2>Update User Profile : </h2>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={userData?.Name}/>
                <br />
                <input type="email" name="email" defaultValue={userData?.Email}/>
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    )
}

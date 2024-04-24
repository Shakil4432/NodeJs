
import './App.css'

function App() {

  const handleSubmit = (event)=>{
    event.preventDefault();
    const form  = event.target;
    const Name = form.name.value;
    const Email = form.email.value;
    const Password = form.password.value;

    const user= {Name, Email, Password};
    console.log(user);

    fetch("http://localhost:5000/users",{
      method:'POST',
      headers:{
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        alert('Users added successfully')
        form.reset()
      }
    })
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" required/>
      <br />
      <input type="email" name="email"required/>
      <br />
      <input type="password" name="password" required/>
      <br />
      <input type="submit" value="Add User" />
    </form>
       
      <h1>Simple CRUD Operation</h1>
      
    </>
  )
}

export default App

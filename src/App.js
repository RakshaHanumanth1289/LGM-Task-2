import React,{useState} from 'react'
import './App.css';

function Fetch() {
  const  [team,setTeam]= useState([])
  const getTeam = async () => {
    let output = await fetch("https://reqres.in/api/users?page=1")
    let jsonResonse = await output.json()
    console.log(jsonResonse)
    setTeam(jsonResonse.data)
  }



  
  return (
    <div className="nav">
      <h1>BANKING SYSTEM
      <button onClick={getTeam}>BANK USERS</button></h1>
      <p>Welcome to Online Banking System</p>

      <div className="content">
        {team.map(({id,email,first_name,last_name,avatar}) => (
        
        <div className="image">
          <img src={avatar} alt='image'/>
          <div className="deta">
           <h2>{id}</h2>
           <h3>First Name: {first_name}</h3>
           <h3>Last Name: {last_name}</h3>
           <span>Email: {email}</span>
           </div>
        </div>
         
        ))}

      </div>
    </div>
    
    
   
  );
};
export default Fetch;

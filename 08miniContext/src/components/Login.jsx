import React, { use, useContext, useState } from 'react'
import UserContext from '../context/UserContext';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext);

  const handleLogin = (e) => {
         e.preventDefault();
         setUser({username, password});
  }
  return (
    <div>
         <input type="text" placeholder='username' 
         value={username} 
         onChange={(e) => setUsername(e.target.value)}
         />
         <br />
         <br />
         <input type="text" placeholder='password'
         value={password} 
         onChange={(e) => setPassword(e.target.value)}
         />
         <br />
         <br />
         <button onClick={handleLogin}>Login</button>
         <br />
         <br />
    </div>
  )
}

export default Login
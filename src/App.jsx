import React, { useState } from "react";

function userReg() {
  const [registerFormdata, setRegisterFormdata] = useState({
    username: "",
    password: ""
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    const registerbody = {

      username: registerFormdata.username,
      password: registerFormdata.password
    };

    const response = await fetch('https://backendforcapstone-cokw.onrender.com/api/users/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          
        },
        body: JSON.stringify(registerbody)
    
      });
  const data = await response.json();
  
  if (response.status == 200) {
      console.log('user created sucessfully..');
      console.log(data);
      setRegisterFormdata({
        username: "",
        password: ""
      });
  }
  else {
    console.log('Error');
    console.log(data);
  }
}
  



  return (
    <div>
      <h1>REGISTRATION PAGE</h1>
      <form onSubmit={handleRegister}>
        <div>

        <label>Username :</label>
          <input type='email'
            placeholder="Email..."
            value={registerFormdata.username}
            required
            onChange={(e) => setRegisterFormdata({ ...registerFormdata, username: e.target.value })} />
        </div>
        <div>
          <label>Password :</label>
          <input type='password'
            placeholder="password..."
            value={registerFormdata.password}
            required
            onChange={(e) => setRegisterFormdata({ ...registerFormdata, password: e.target.value })} />
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
    
)
}
export default userReg;
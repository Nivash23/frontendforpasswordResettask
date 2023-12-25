import React, { useContext, useState } from "react";
import '../App';
import '../styles/App.css';
import { MessageContext } from "../App";

const RegisterForm = () => {
  const [registerFormdata, setRegisterFormdata] = useState({
    username: "",
    password: "",
  });
  
  const handleRegister = async (e) => {
    e.preventDefault();
    
    const { setIsRegistered} = useContext(MessageContext);
    const registerbody = {
      username: registerFormdata.username,
      password: registerFormdata.password,
    };
    // const [loginFormData, setLoginFormData] = useState({
    //   username: "",
    //   password: "",
    // });

    const response = await fetch(
      "https://backendforcapstone-cokw.onrender.com/api/users/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerbody),
      }
    );
    const data = await response.json();

    if (response.status == 200) {
      console.log("user created sucessfully..");
      console.log(data);
      setRegisterFormdata({
        username: "",
        password: "",
      });
      alert("user Registered sucessfully");
      setIsRegistered(true);
    } else {
      console.log("Error");
      console.log(data);
    }
  };
  return (
    <div id="container">
      <div>
        <h1>REGISTRATION PAGE</h1>
        <form onSubmit={handleRegister}>
          <div id="username">
            <label>Username :</label>
            <input
              type="email"
              placeholder="Email..."
              value={registerFormdata.username}
              required
              onChange={(e) =>
                setRegisterFormdata({
                  ...registerFormdata,
                  username: e.target.value,
                })
              }
            />
          </div>
          <div id="password">
            <label>Password :</label>
            <input
              type="password"
              placeholder="password..."
              value={registerFormdata.password}
              required
              onChange={(e) =>
                setRegisterFormdata({
                  ...registerFormdata,
                  password: e.target.value,
                })
              }
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};
export default RegisterForm;

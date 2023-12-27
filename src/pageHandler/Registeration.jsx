import React, { useContext, useState } from "react";
import { BrowserRouter, Link } from 'react-router-dom';
import App from '../App';
import "../styles/App.css";
// import { MessageContext } from "../App";
import LoginFrom from "./Login";

const RegisterForm = ({isRegistered,setIsRegistered}) => {
  const [regbut, setRegbut] = useState(true);
  const [registerFormdata, setRegisterFormdata] = useState({
    username: "",
    name:"",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  // const { setIsRegistered, isRegistered } = useContext(MessageContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const registerbody = {
      username: registerFormdata.username,
      name:registerFormdata.name,
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
        name:"",
        password: "",
      });
      setLoading(false);
      setIsRegistered(true);
      alert("user Registered sucessfully");
      

      // isRegistered ? <LoginFrom /> : <RegisterForm />;
    } else {
      console.log("Error");
      console.log(data);
    }
  };
  
  return (
    <div id="container">
      <div>
        <h2>REGISTRATION PAGE</h2>
        <form onSubmit={handleRegister}>
          <div id="username">
            <label htmlFor='email'>Username :</label>
            <input
              id='email'
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
          <div id="name">
            <label htmlFor='name'>Name :</label>
            <input
              id='name'
              type="text"
              placeholder="Enter your name..."
              value={registerFormdata.name}
              required
              onChange={(e) =>
                setRegisterFormdata({
                  ...registerFormdata,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div id="password">
            <label htmlFor='pass'>Password :</label>
          <input
              id='pass'
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
          {
            loading?
          (<div className="spinner-border" id='load' role="status">
            <span className="visually-hidden">Loading...</span>
          </div>):null
          }
          <button type="submit"   >Register</button>
          <div id='pageswitch'>
            Already have an account ? <a onClick={() => {setIsRegistered(true)}}>Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default RegisterForm;

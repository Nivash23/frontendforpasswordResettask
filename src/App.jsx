import React, { useState } from "react";
import RegisterForm from './pageHandler/Registeration';
import Dashboard from "./pageHandler/Dashboard";
import LoginFrom from "./pageHandler/Login";
// import { Route, BrowserRouter, Routes } from "react-router-dom";
import './styles/App.css'

// const MessageContext = createContext();
function userReg() {
  const [isRegistered, setIsRegistered] = useState(false);

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  return (
    <div>
      <h1>PettyCash Manager</h1>
      {
        user ? (<Dashboard token={token} User={user} />) : isRegistered ?
          (<LoginFrom
          isRegistered={isRegistered}
          setIsRegistered={setIsRegistered}
          user={user}
          setUser={setUser}
          token={token}
          setToken={setToken}
          />) :
          (<RegisterForm
            isRegistered={isRegistered}
            setIsRegistered={setIsRegistered} />)
      }
      

      
     
    </div>
  );
}
export default userReg;

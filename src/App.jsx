import React, { createContext, useState } from "react";
import RegisterForm from './pageHandler/Registeration';
import LoginFrom from "./pageHandler/Login";
import { Route, BrowserRouter, Routes } from "react-router-dom";

// const MessageContext = createContext();
function userReg() {
  // const [isRegistered, setIsRegistered] = useState(false);

  return (
    <div>
      <h1>PettyCash Manager</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<LoginFrom />} />
          <Route path="/" element={<RegisterForm/>}/>
          <Route path="/Register" element={<RegisterForm/>}/>
        </Routes>
      </BrowserRouter>

      
     
    </div>
  );
}
export default userReg;

import React, { createContext, useState } from "react";
import RegisterForm from './pageHandler/Registeration';
import LoginFrom from "./pageHandler/Login";

const MessageContext = createContext();
function userReg() {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <div>
      <h1>PettyCash Manager</h1>
      <MessageContext.Provider value={{setIsRegistered}}>
              
      </MessageContext.Provider> 
      {
        isRegistered ? <LoginFrom /> : <RegisterForm />
      }
    </div>
  );
}
export {userReg as default,MessageContext};

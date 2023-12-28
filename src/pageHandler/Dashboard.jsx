import React, { useState } from "react";
import "../App";
import "../styles/App.css";
import 'axios';
import axios from "axios";
function Dashboard({ User, setUser,setIsRegistered,token }) {
  const [entrydata, setEntrydata] = useState({
    Amount: "",
    Description: "",
  });
  const Datahandler =async (e) => {
    e.preventDefault();

    const entrybody  ={
      Amount: entrydata.Amount,
      Description: entrydata.Description,
    }
    const config = {
      header: {
        Authorization:`Bearer ${token}`
      }    }

    const response = await axios.post('https://backendforcapstone-cokw.onrender.com/api/entry/', entrybody, config);
    if (response.status == 200)
    {
      console.log('entry saved sucessfully...');
      console.log(response.data);
      setEntrydata({ Amount: "", Description: "", });
    }
    else {
      console.log(Error);
    }

  }
  return (
    <div>
      <div id='head'>
        <h5>Welcome,{User.name}  <button
          id="logbut"
          onClick={() => {
              setUser(null);
              setIsRegistered(true);
          }}>Logout</button></h5>
      </div>
      <div id='dashcontainer'>         
      <form onSubmit={Datahandler}>
        <h3>History Entry:</h3>
        <div id='amt'>
          <label htmlFor="amount">Amount   :</label>
          <input
            id="amount"
            type="number"
            placeholder="Amount..."
            value={entrydata.Amount}
            onChange={(e) => {
              setEntrydata({ ...entrydata, Amount: e.target.value });
            }}
            required
          />
        </div>
        <div id='dec'>
          <label htmlFor="desc">Description :</label>
          <input
            id="desc"
            type="text"
            placeholder="Description...."
            value={entrydata.Description}
            onChange={(e) => {
              setEntrydata({ ...entrydata, Description: e.target.value });
            }}
            required
          />
        </div >
        <div id='save'>
          <button type="submit">Save</button>
        </div>
      </form>
      </div>
    </div >
  )
}
export default Dashboard;

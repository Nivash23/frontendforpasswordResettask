import React from "react";
import '../App';
import '../styles/App.css'
function Dashboard({User})
{
    return (
        <div>
            <p>Welcome,{User.payload.username }</p>
        </div>
    )
}
export default Dashboard;
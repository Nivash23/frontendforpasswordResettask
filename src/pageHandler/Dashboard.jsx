import React from "react";
import '../App';
import '../styles/App.css'
function Dashboard({User})
{
    return (
        <div>
            <h2>Welcome,{User.username}</h2>
        </div>
    )
}
export default Dashboard;
import React from "react"
import Name from "./Name.jsx"
import Search from "./Search.jsx"
import Login from "./Login.jsx"
import "../App.css"
function Header()
{
   
    return (<div className="header">
        <div className="insideheader">
        <Name/>
        <Search/>
        <Login/>
        </div>
    </div>);
};
export default Header
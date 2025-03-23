import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ()=>{

    
    const[btnName, setBtnName] = useState("Login");
    const onlineStatus =useOnlineStatus();

    return(
        <div className="header">
            <div className="logo">
                <Link to="/"><img src={LOGO_URL}/></Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online status: {onlineStatus ? "✅" : "🔴"}</li>

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
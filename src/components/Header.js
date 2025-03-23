import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ()=>{

    
    const[btnName, setBtnName] = useState("Login");
    const onlineStatus =useOnlineStatus();

    return(
        <div className="flex justify-between  shadow-lg mb-10 ">
            <div className="logo-container ">
                <Link to="/"><img className="w-30" src={LOGO_URL}/></Link>
            </div>
            <div className="flex items-center ">
                <ul className="flex  p-4 m-4">
                    <li className="px-4">Online status: {onlineStatus ? "✅" : "🔴"}</li>

                    <li className="px-4 hover:text-red-600"><Link to="/">Home</Link></li>
                    <li className="px-4 hover:text-red-600"><Link to="/about">About Us</Link></li>
                    <li className="px-4 hover:text-red-600">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4 hover:text-red-600">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 hover:text-red-600">Cart</li>
                    <button className="login hover:text-red-600" onClick={()=>{
                        btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
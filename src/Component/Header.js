import { useState } from "react";
import { URL_LOGO } from "../utils/cdn_link";
import { Link } from "react-router-dom";
import appStore from "../utils/appStore";
import { useSelector } from "react-redux";
export const Header=()=>{
    const [Loginbtn,updLoginbtn]=useState("login");
    const items=useSelector((store)=>store.cart.items);
    console.log("store",items);
    return (
        <div className="header ">
            <div className="logo">
                <img src={URL_LOGO} alt="Logo here"></img>
            </div>
            <nav className="nav-list">
                <ul className="nav-items">
                    <li className="nav-item"><Link className="Link"to="/">Home</Link></li>

                    <li className="nav-item"><Link className="Link"to="/cart">Cart ({items.length})</Link></li>

                    <li className="nav-item"><Link className="Link"to="/contact">Contact</Link></li>

                    <li className="nav-item"><Link className="Link" to="/about">About</Link></li>
                    
                    <button className="nav-item-btn" onClick={()=>
                        (Loginbtn==="login")?updLoginbtn("Logout"):updLoginbtn("login")}>{Loginbtn}</button>

                </ul>
            </nav>
            
        </div>
    )
}
export default Header;
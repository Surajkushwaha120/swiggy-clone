import React, { useContext, useState } from "react";
import { Titel } from "../App";
import { Link } from "react-router-dom";
import {Route, Routes } from "react-router-dom";
import About from "./About";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";


const Header = () => {
  // const [titel, setTitel] = useState("Food Vill");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const isOnline = useOnline();
  
  const {user} = useContext (UserContext);
  
  return (   
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
      <Titel />
      {/* <h1>{titel}</h1> */}
      {/* <button onClick={() => setTitel("New Food Villa")} className='header-btn'>Change Titel</button> */}
      <div className="nav-items">
        <ul className="flex py-10 ">
          <li className="px-2" >
            <Link className="link-text" to="/" >Home</Link>
          </li>
          <li>   
            <Link to="/about">About</Link>
          </li>
          <li className="px-2" >
            <Link to="/contactUs">Contact Us</Link>
          </li>
          <li className="px-2" >
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-2" >
            <Link to="/instamart">Instamart</Link>
          </li>
          
        </ul>
      </div>
      <h1 className="pl-20">{isOnline ? "Online" : "Ofline"}</h1>
    <h1 className="pt-5">{user.name}</h1> 
      {isLoggedIn ? (
        <button className="header-btn" onClick={() => setIsLoggedIn(false)}>
         Login Out  
        </button>
      ) : (
        <button className="header-btn" onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      )}
    </div>
  );
};


export default Header;

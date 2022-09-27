import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import {
  Nav,
  NavLogo,
  NavMenu,
  NavBtnLink,
  NavBtn,
  Bars,
} from "./NavbarElements";



const Navbar = () => {
  const {data} =useContext(ThemeContext)
  return (
   
      <Nav style={{background:data?.background}}>
        <NavLogo to="/home">Logo</NavLogo>
        <Bars />
        <NavMenu>
          <NavBtn>
            <NavBtnLink to="/sign-in" style={{color:data?.color}}>Sign In</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/sign-up" style={{color:data?.color}}>Sign Up</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/timer" style={{color:data?.color}}>Timer</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/number" style={{color:data?.color}}>Num To Word</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/demo" style={{color:data?.color}}>Context</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>

  
  );
};

export default Navbar;

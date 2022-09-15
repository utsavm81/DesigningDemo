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
  const {value,...styleData} = data
  return (
   
      <Nav style={{background:styleData.background}}>
        <NavLogo to="/home">Logo</NavLogo>
        <Bars />
        <NavMenu>
          <NavBtn>
            <NavBtnLink to="/sign-in" style={{color:styleData.color}}>Sign In</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/sign-up" style={{color:styleData.color}}>Sign Up</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/timer" style={{color:styleData.color}}>Timer</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/number" style={{color:styleData.color}}>Num To Word</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/demo" style={{color:styleData.color}}>Context</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>

  
  );
};

export default Navbar;

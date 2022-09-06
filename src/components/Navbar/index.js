import React from "react";
import {
  Nav,
  NavLogo,
  NavMenu,
  NavBtnLink,
  NavBtn,
  Bars,
} from "./NavbarElements";



const Navbar = () => {
  return (
   
      <Nav>
        <NavLogo to="/home">Logo</NavLogo>
        <Bars />
        <NavMenu>
          <NavBtn>
            <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/timer">Timer</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/number">Num To Word</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/demo">Context</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>

  
  );
};

export default Navbar;

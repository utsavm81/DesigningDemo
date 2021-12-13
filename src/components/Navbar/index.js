import React from "react";
import {
  Nav,
  NavLogo,
  NavMenu,
  NavBtnLink,
  NavBtn,
  Bars,
} from "./NavbarElements";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
   
      <Nav>
        <NavLogo to="/">Logo</NavLogo>
        <Bars />
        <NavMenu>
          <NavBtn>
            <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
  
  );
};

export default Navbar;

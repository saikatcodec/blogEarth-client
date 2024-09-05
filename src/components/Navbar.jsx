import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from "keep-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export const NavbarComponent = () => {
  return (
    <Navbar className="px-2.5 sticky top-0 z-50">
      <NavbarContainer>
        <NavbarBrand>
          <Link to={"/"}>
            <img src={logo} alt="BLogEarth" width="88" height="40" />
          </Link>
        </NavbarBrand>
        <NavbarList>
          <NavbarItem>Projects</NavbarItem>
          <NavbarItem>Research</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
        </NavbarList>
        <NavbarList>
          <Link to={"/login"}>
            <NavbarItem>Sign In</NavbarItem>
          </Link>
          <Link to={"/register"}>
            <NavbarItem active={true}>Sign Up</NavbarItem>
          </Link>
        </NavbarList>
        <NavbarCollapseBtn />
        <NavbarCollapse>
          <NavbarItem>Projects</NavbarItem>
          <NavbarItem>Research</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
          <Link to={"/login"}>
            <NavbarItem>Sign In</NavbarItem>
          </Link>
          <Link to={"/register"}>
            <NavbarItem active={true}>Sign Up</NavbarItem>
          </Link>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
};

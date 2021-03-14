import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon,
         NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElemets';


const Navbar = ({ toggle }) => {

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Hitch Car</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover" >Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup" >Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/sigin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );

}

export default Navbar;
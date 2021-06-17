import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import Logo from '../../images/myframes_white.png';

import {
    Nav,
    NavbarContainer,
    NavLogo, MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavLogoImg
    // NavBtn,
    // NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>
                            {/* MyFrames */}
                            <NavLogoImg src={Logo}/>
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                            </NavItem>
                            {/* <NavItem>
                                <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</NavLinks>
                            </NavItem> */}
                            <NavItem>
                                <NavLinks to="experience" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Work Experience</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="skills" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Skills</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="hobbies" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Hobbies</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</NavLinks>
                            </NavItem>
                        </NavMenu>
                        {/* <NavBtn>
                            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                        </NavBtn> */}
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar

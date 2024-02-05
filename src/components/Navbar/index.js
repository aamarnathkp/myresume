import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { AiOutlineFormatPainter } from "react-icons/ai";
import { RiPaintBrushFill } from "react-icons/ri";

import Logo from "../Logo/Logo";

import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    ThemeSelection,
    Theme,
} from "./NavbarElements";

const Navbar = ({ toggle, onThemeClick, currentTheme }) => {
    const [scrollNav, setScrollNav] = useState(false);
    const [onTheme, setOnTheme] = useState(false);

    const onThemeChange = (value) => {
        setOnTheme(value);
    };

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav scrollNav={scrollNav} themecolor={currentTheme}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>
                            {/* MyFrames */}
                            <Logo themecolor={currentTheme} />
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks
                                    themecolor={currentTheme}
                                    aria-label='about'
                                    to='about'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>
                                    About
                                </NavLinks>
                            </NavItem>
                            {/* <NavItem>
                                <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</NavLinks>
                            </NavItem> */}
                            <NavItem>
                                <NavLinks
                                    themecolor={currentTheme}
                                    aria-label='work experience'
                                    to='experience'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>
                                    Work Experience
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    themecolor={currentTheme}
                                    aria-label='skills'
                                    to='skills'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>
                                    Skills
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    themecolor={currentTheme}
                                    aria-label='hobbies'
                                    to='hobbies'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>
                                    Hobbies
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    themecolor={currentTheme}
                                    aria-label='contact'
                                    to='contact'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>
                                    Contact
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                        <ThemeSelection>
                            <Theme
                                id='themeBtn'
                                aria-label='Theme Change'
                                themecolor={currentTheme}
                                onClick={onThemeClick}
                                onMouseEnter={() => {
                                    onThemeChange(true);
                                }}
                                onMouseLeave={() => {
                                    onThemeChange(false);
                                }}>
                                {onTheme ? (
                                    <RiPaintBrushFill color='black' />
                                ) : (
                                    <AiOutlineFormatPainter color='black' />
                                )}
                            </Theme>
                        </ThemeSelection>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;

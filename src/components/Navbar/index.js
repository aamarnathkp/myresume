import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import Logo from '../../images/myframes_white.png';
import { AiOutlineFormatPainter } from 'react-icons/ai';
import { RiPaintBrushFill } from 'react-icons/ri';

import {
    Nav,
    NavbarContainer,
    NavLogo, MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavLogoImg,
    ThemeSelection,
    Theme
} from './NavbarElements';

const Navbar = ({ toggle, onThemeClick, currentTheme }) => {

    const [scrollNav, setScrollNav] = useState(false);
    const [onTheme, setOnTheme] = useState(false);

    const onThemeChange = (value) => {
        setOnTheme(value);
    }

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
                            <NavLogoImg src={Logo} />
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks themecolor={currentTheme} to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                            </NavItem>
                            {/* <NavItem>
                                <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</NavLinks>
                            </NavItem> */}
                            <NavItem>
                                <NavLinks themecolor={currentTheme} to="experience" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Work Experience</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks themecolor={currentTheme} to="skills" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Skills</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks themecolor={currentTheme} to="hobbies" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Hobbies</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks themecolor={currentTheme} to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <ThemeSelection >
                            <Theme
                                themecolor={currentTheme}
                                onClick={onThemeClick}
                                onMouseEnter={() => { onThemeChange(true) }}
                                onMouseLeave={() => { onThemeChange(false) }} >
                                {onTheme ? <RiPaintBrushFill color='black' /> : <AiOutlineFormatPainter color='black' />}</Theme>
                        </ThemeSelection>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar

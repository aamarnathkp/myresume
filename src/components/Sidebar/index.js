import React, { useState } from 'react';
import { AiOutlineFormatPainter } from 'react-icons/ai';
import { RiPaintBrushFill } from 'react-icons/ri';

import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWtap,
    SidebarRoute
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle, onThemeClick, currentTheme }) => {

    const [onTheme, setOnTheme] = useState(false);

    const onThemeChange = (value) => {
        setOnTheme(value);
    }


    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                    {/* <SidebarLink to='discover' onClick={toggle}>Discover</SidebarLink> */}
                    <SidebarLink to='experience' onClick={toggle}>Work Experience</SidebarLink>
                    <SidebarLink to='skills' onClick={toggle}>SKills</SidebarLink>
                    <SidebarLink to='hobbies' onClick={toggle}>Hobbies</SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>Contact</SidebarLink>
                </SidebarMenu>
                <SideBtnWtap>
                    <SidebarRoute
                        themecolor={currentTheme}
                        onClick={onThemeClick}
                        onMouseEnter={() => { onThemeChange(true) }}
                        onMouseLeave={() => { onThemeChange(false) }}>
                        {onTheme ? <RiPaintBrushFill color='black' /> : <AiOutlineFormatPainter color='black' />}</SidebarRoute>
                </SideBtnWtap>
            </SidebarWrapper>
        </SidebarContainer>

    )
}

export default Sidebar

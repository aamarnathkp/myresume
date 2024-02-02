import React, { useState } from "react";
import { AiOutlineFormatPainter } from "react-icons/ai";
import { RiPaintBrushFill } from "react-icons/ri";

import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SideBarLinkWrapper,
    SidebarLink,
    SideBtnWtap,
    SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle, onThemeClick, currentTheme }) => {
    const [onTheme, setOnTheme] = useState(false);

    const onThemeChange = (value) => {
        setOnTheme(value);
    };

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SideBarLinkWrapper>
                        <SidebarLink
                            to='about'
                            onClick={toggle}
                            aria-label='about'>
                            About
                        </SidebarLink>
                    </SideBarLinkWrapper>
                    <SideBarLinkWrapper>
                        <SidebarLink
                            to='experience'
                            onClick={toggle}
                            aria-label='work experience'>
                            Work Experience
                        </SidebarLink>
                    </SideBarLinkWrapper>
                    <SideBarLinkWrapper>
                        <SidebarLink
                            to='skills'
                            onClick={toggle}
                            aria-label='skills'>
                            SKills
                        </SidebarLink>
                    </SideBarLinkWrapper>
                    <SideBarLinkWrapper>
                        <SidebarLink
                            to='hobbies'
                            onClick={toggle}
                            aria-label='hobbies'>
                            Hobbies
                        </SidebarLink>
                    </SideBarLinkWrapper>
                    <SideBarLinkWrapper>
                        <SidebarLink
                            to='contact'
                            onClick={toggle}
                            aria-label='contact'>
                            Contact
                        </SidebarLink>
                    </SideBarLinkWrapper>
                </SidebarMenu>
                <SideBtnWtap>
                    <SidebarRoute
                        id='themeBtn-sidebar'
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
                    </SidebarRoute>
                </SideBtnWtap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;

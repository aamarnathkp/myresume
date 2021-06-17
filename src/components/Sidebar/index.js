import React from 'react'

import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    // SideBtnWtap,
    // SidebarRoute
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen= {isOpen} onClick={toggle}>
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
                {/* <SideBtnWtap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWtap> */}
            </SidebarWrapper>
        </SidebarContainer>

    )
}

export default Sidebar

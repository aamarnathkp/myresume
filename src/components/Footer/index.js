import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaNpm,
    FaPenNib,
} from "react-icons/fa";

import {
    FooterContainer,
    FooterWrap,
    // FooterLinkContainer,
    // FooterLinkWrapper,
    // FooterLinkItems,
    // FooterLinkTitle,
    // FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from "./FooterElements";

import Logo from "../Logo/Logo";

const Footer = ({ currentTheme }) => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer currentTheme={currentTheme}>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            {/* MyFrames */}
                            <Logo themecolor={currentTheme} width='150px' />
                        </SocialLogo>
                        <WebsiteRights>
                            aamarnathkp © {new Date().getFullYear()} All rights
                            reserved
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink
                                href='https://www.facebook.com/aamarnath.kp/'
                                currentTheme={currentTheme}
                                target='_blank'
                                aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink
                                href='/'
                                currentTheme={currentTheme}
                                target='_blank'
                                aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink
                                href='https://twitter.com/aamarnathkp'
                                currentTheme={currentTheme}
                                target='_blank'
                                aria-label='Twitter'>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink
                                href='https://www.linkedin.com/in/aamarnathkp/'
                                currentTheme={currentTheme}
                                target='_blank'
                                aria-label='LinkedIn'>
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink
                                href='https://github.com/aamarnathkp'
                                currentTheme={currentTheme}
                                target='_blank'
                                aria-label='GitHub'>
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink
                                href='https://www.npmjs.com/~aamarnathkp'
                                currentTheme={currentTheme}
                                target='_blank'
                                aria-label='npm'>
                                <FaNpm />
                            </SocialIconLink>
                            <SocialIconLink
                                href='https://todoappv3.netlify.app/'
                                currentTheme={currentTheme}
                                target='_blank'
                                aria-label='todo-app'>
                                <FaPenNib />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;

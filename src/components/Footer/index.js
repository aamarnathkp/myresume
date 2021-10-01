import React from "react";
import { animateScroll as scroll } from "react-scroll";
import Logo from "../../images/myframes_white.png";
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub,
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
    LogoImg,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from "./FooterElements";

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                {/* <FooterLinkContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>AboutUS</FooterLinkTitle>
                            <FooterLink to='/signin'>How it works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Test</FooterLink>
                            <FooterLink to='/signin'>Test2</FooterLink>
                            <FooterLink to='/signin'>Test3</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>AboutUS</FooterLinkTitle>
                            <FooterLink to='/signin'>How it works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Test</FooterLink>
                            <FooterLink to='/signin'>Test2</FooterLink>
                            <FooterLink to='/signin'>Test3</FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>AboutUS</FooterLinkTitle>
                            <FooterLink to='/signin'>How it works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Test</FooterLink>
                            <FooterLink to='/signin'>Test2</FooterLink>
                            <FooterLink to='/signin'>Test3</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>AboutUS</FooterLinkTitle>
                            <FooterLink to='/signin'>How it works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Test</FooterLink>
                            <FooterLink to='/signin'>Test2</FooterLink>
                            <FooterLink to='/signin'>Test3</FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                </FooterLinkContainer> */}
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            {/* MyFrames */}
                            <LogoImg src={Logo} />
                        </SocialLogo>
                        <WebsiteRights>
                            aamarnathkp © {new Date().getFullYear()} All rights
                            reserved
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink
                                href='https://www.facebook.com/aamarnath.kp/'
                                target='_blank'
                                aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink
                                href='/'
                                target='_blank'
                                aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink
                                href='https://twitter.com/aamarnathkp'
                                target='_blank'
                                aria-label='Twitter'>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink
                                href='https://www.linkedin.com/in/aamarnathkp/'
                                target='_blank'
                                aria-label='LinkedIn'>
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink
                                href='https://github.com/aamarnathkp'
                                target='_blank'
                                aria-label='GitHub'>
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink
                                href='https://todoappv3.netlify.app/'
                                target='_blank'
                                aria-label='GitHub'>
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

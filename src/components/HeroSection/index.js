import React, { useState } from "react";
//import Video from '../../videos/video.mp4';
import { Button } from "../ButtonElement";
import VideoBackground from "./VideoBackground";

import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaNpm,
} from "react-icons/fa";

import {
    HeroContainer,
    HeroContent,
    HeroIntro,
    HeroH1,
    HeroP,
    SocialIconLink,
    SocialIcons,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
} from "./HeroElements";
import AnimatedWorkExperience from "../Animated/AnimatedWorkExperience";

const HeroSection = ({ currentTheme, myExperience }) => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer id={"home"}>
            <VideoBackground themecolor={currentTheme} />
            <HeroContent themecolor={currentTheme}>
                <HeroIntro>Hi, I'm</HeroIntro>
                <HeroH1 themecolor={currentTheme}>Amarnath K P</HeroH1>
                <HeroP themecolor={currentTheme}>
                    <AnimatedWorkExperience
                        value={myExperience}
                        currentTheme={currentTheme}
                    />
                </HeroP>
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
                        href='https://www.npmjs.com/~aamarnathkp'
                        target='_blank'
                        aria-label='npm'>
                        <FaNpm />
                    </SocialIconLink>
                </SocialIcons>
                <HeroBtnWrapper>
                    <Button
                        to='about'
                        themecolor={currentTheme}
                        primary='true'
                        dark='true'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>
                        Know Me More {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;

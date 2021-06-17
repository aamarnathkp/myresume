import React from 'react'

import Resume from '../../Resume/AmarnathKP.pdf';
import Timeline from './ExperienceTimeline';
import SkillsSection from './Skills';

// import { Button } from '../ButtonElement';


import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Column2,
    ImgWrap,
    Img,
    Button
} from './InfoElements';



const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headLine, timeline, skills,
    darkText, description, buttonLabel, img, alt, primary, dark, dark2, showButton }) => {

    let columns1 = null;
    if (timeline) {
        columns1 = <Timeline />
    } else if (skills) {
        columns1 = <SkillsSection />
    }
    else {
        columns1 = <TextWrapper>
            <TopLine>{topLine}</TopLine>
            <Heading lightText={lightText}>{headLine}</Heading>
            <Subtitle darkText={darkText}>{description}</Subtitle>
            <BtnWrap>
                {showButton ? <Button to='home'
                    href={Resume}
                    download
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                >{buttonLabel}</Button> : null}
            </BtnWrap>
        </TextWrapper>
    }


    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            {columns1}
                        </Column1>
                        {timeline ? null :
                            <Column2>
                                <ImgWrap>
                                    <Img src={img} alt={alt} />
                                </ImgWrap>
                            </Column2>}
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection

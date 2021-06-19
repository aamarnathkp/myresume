import React from 'react';
// import Icon1 from '../../images/hobbies4.svg';
// import Icon2 from '../../images/hobbies.svg';
// import Icon3 from '../../images/hobbies5.svg';
import { imageSelector } from '../imageSelection';

import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './HobbiesElements';

const Hobbies = ({currentTheme}) => {
    return (
        <>
            <ServicesContainer id='hobbies'>
                <ServicesH1>My Hobbies</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={imageSelector(currentTheme, 'hobbie1')} />
                        <ServicesH2>Photography</ServicesH2>
                        <ServicesP>Like to click moments and cherish memories, also interested in Fashion, Pets and Portrait photography</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={imageSelector(currentTheme, 'hobbie2')} />
                        <ServicesH2>Digital Art</ServicesH2>
                        <ServicesP>Likes to create portraits and digital painting using procreate</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={imageSelector(currentTheme, 'hobbie3')}/>
                        <ServicesH2>Gaming</ServicesH2>
                        <ServicesP>Likes to play games</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Hobbies

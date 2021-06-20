import React, { useState } from 'react';
// import Icon1 from '../../images/hobbies4.svg';
// import Icon2 from '../../images/hobbies.svg';
// import Icon3 from '../../images/hobbies5.svg';
import { imageSelector } from '../imageSelection';
import HobbieModal from '../Modal';

import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './HobbiesElements';

const Hobbies = ({ currentTheme }) => {

    const [modalStatus, setModalStatus] = useState({
        status : false,
        hobbie : null
    });

    const onModalClose = () => {
        setModalStatus({
            status : false,
            hobbie : null
        });
    }

    const onModalOpen = (hobbie) => {
        setModalStatus({
            status : true,
            hobbie : hobbie
        });
    }

    let modal = null;
    let {status, hobbie} = modalStatus;
    if (status) {
        modal = <HobbieModal
            open={status}
            hobbie= {hobbie}
            themecolor={currentTheme}
            modalClose={onModalClose}
        />
    }

    return (
        <>
            {modal}
            <ServicesContainer id='hobbies'>
                <ServicesH1>My Hobbies</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard onClick={() => onModalOpen('photography')}>
                        <ServicesIcon src={imageSelector(currentTheme, 'hobbie1')} />
                        <ServicesH2>Photography</ServicesH2>
                        <ServicesP>Like to click moments and cherish memories, also interested in Fashion, Pets and Portrait photography</ServicesP>
                    </ServicesCard>
                    <ServicesCard onClick={() => onModalOpen('art')}>
                        <ServicesIcon src={imageSelector(currentTheme, 'hobbie2')} />
                        <ServicesH2>Digital Art</ServicesH2>
                        <ServicesP>Likes to create portraits and digital painting using procreate</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={imageSelector(currentTheme, 'hobbie3')} />
                        <ServicesH2>Gaming</ServicesH2>
                        <ServicesP>Likes to play games</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Hobbies

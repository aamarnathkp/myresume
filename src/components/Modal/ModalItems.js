import SimpleImageSlider from "react-simple-image-slider";
import React, { useCallback, useState } from 'react';


import Image1 from '../../images/photography/image1.jpg';
import Image2 from '../../images/photography/image2.jpg';
import Image3 from '../../images/photography/image3.jpg';
import Image4 from '../../images/photography/image4.jpg';

import Art1 from '../../images/art/image1.jpg';
import Art2 from '../../images/art/image2.jpg';
import Art3 from '../../images/art/image3.jpg';
import Art4 from '../../images/art/image4.png';
import Art5 from '../../images/art/image5.png';
import Art6 from '../../images/art/image6.jpg';
import Art7 from '../../images/art/image7.jpg';
import Art8 from '../../images/art/image8.jpg';


const ModalItems = props => {

    const [sliderOptions] = useState({
        useGPURender: true,
        showNavs: true,
        showBullets: true,
        navStyle: 2,
        navSize: 50,
        navMargin: 30,
        duration: 0.5,
        bgColor: '#000'
    });

    const [, setSlideIndexText] = useState('');

    const onClick = useCallback((idx, event) => {
        // console.log(`[onClick] ${idx} ${event.currentTarget}`);
    }, []);

    const onClickNav = useCallback((toRight) => {
        // console.log(`[onClickNav] ${toRight}`);
    }, []);

    const onClickBullets = useCallback((idx) => {
        // console.log(`[onClickBullets] ${idx}`);
    }, []);

    const onStartSlide = useCallback((idx, length) => {
        // console.log(`[onStartSlide] ${idx}/${length}`);
        setSlideIndexText(`${idx} / ${length}`);
    }, []);

    const onCompleteSlide = useCallback((idx, length) => {
        // console.log(`[onCompleteSlide] ${idx}/${length}`);
        setSlideIndexText(`${idx} / ${length}`);
    }, []);

    let images = null;

    if (props.hobbie === 'photography') {
        images = [
            { url: Image1 },
            { url: Image2 },
            { url: Image3 },
            { url: Image4 },
        ];
    } else {
        images = [
            { url: Art1 },
            { url: Art2 },
            { url: Art3 },
            { url: Art4 },
            { url: Art5 },
            { url: Art6 },
            { url: Art7 },
            { url: Art8 },
        ];
    }

    const screenWidth =  window.innerWidth;
    let imageWidth = null;
    let imageHeight = null;
    let navIcon = null;
    if (screenWidth >= 768) {
        imageWidth = (props.hobbie === 'photography' ? 896 : 550);
        imageHeight = (props.hobbie === 'photography' ? 504 : 750);
        navIcon=true;
    }else if( screenWidth <= 767 && screenWidth >= 480){
        imageWidth = (props.hobbie === 'photography' ? 470 : 400);
        imageHeight = (props.hobbie === 'photography' ? 340 : 580);
        navIcon=false
    }else{
        imageWidth = (props.hobbie === 'photography' ? 340 : 260);
        imageHeight = (props.hobbie === 'photography' ? 180 : 380);
        navIcon=false
    }

    return (
        <SimpleImageSlider
            width={imageWidth}
            height={imageHeight}
            images={images}
            showBullets={sliderOptions.showBullets}
            showNavs={navIcon}
            startIndex={0}
            useGPURender={sliderOptions.useGPURender}
            navStyle={sliderOptions.navStyle}
            navSize={sliderOptions.navSize}
            navMargin={sliderOptions.navMargin}
            slideDuration={sliderOptions.duration}
            onClick={onClick}
            onClickNav={onClickNav}
            onClickBullets={onClickBullets}
            onStartSlide={onStartSlide}
            onCompleteSlide={onCompleteSlide}       
        />
    );
}

export default ModalItems;
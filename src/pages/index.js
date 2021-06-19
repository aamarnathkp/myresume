import React, { useState } from 'react'

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjFive, homeObjFour, homeObjOne, homeObjThree } from '../components/InfoSection/data';
import Hobbies from '../components/Hobbies';
import Footer from '../components/Footer';

const colors = {
    'green': '#01bf71',
    'red': 'red',
    'yellow': '#e6b800'
}

const colorGrid = ['green', 'red', 'yellow'];

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('#e6b800')

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const onThemeClick = () => {
        let colorGridU = [...colorGrid];
        let filteredColorGrid = colorGridU.filter((value) => {
            return colors[value] !== theme;
        });
        let randomColor = filteredColorGrid[Math.floor(Math.random() * filteredColorGrid.length)];
        setTheme(colors[randomColor])
    }

    const themeProps = {
        currentTheme: theme,
        changeTheme: onThemeClick
    }

    const about = {
        ...homeObjOne,
        ...themeProps
    }

    const experience = {
        ...homeObjThree,
        ...themeProps
    }

    const skills = {
        ...homeObjFour,
        ...themeProps
    }

    const contact = {
        ...homeObjFive,
        ...themeProps
    }

    return (
        <>
            <Sidebar
                currentTheme={theme}
                onThemeClick={() => onThemeClick()}
                isOpen={isOpen}
                toggle={toggle} />
            <Navbar
                currentTheme={theme}
                toggle={toggle}
                onThemeClick={() => onThemeClick()} />
            <HeroSection {...themeProps} />
            <InfoSection {...about} />
            {/* <InfoSection {...homeObjTwo}/>             */}
            <InfoSection {...experience} />
            <InfoSection {...skills} />
            <Hobbies currentTheme={theme} />
            <InfoSection {...contact} />
            <Footer />
        </>
    )
}

export default Home

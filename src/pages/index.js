import React, { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
    // homeObjFive,
    homeObjFour,
    homeObjOne,
    homeObjThree,
} from "../components/InfoSection/data";
import Hobbies from "../components/Hobbies";
import ContactMe from "../components/ContactSection";
import Footer from "../components/Footer";
import { calculateExperience } from "../utils/utils";

const colors = {
    green: "#01bf71",
    red: "#e44f4f",
    yellow: "#e6b800",
};

const colorGrid = ["green", "red", "yellow"];

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState("#e6b800");

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const myExperience = calculateExperience();

    const onThemeClick = () => {
        let colorGridU = [...colorGrid];
        let filteredColorGrid = colorGridU.filter((value) => {
            return colors[value] !== theme;
        });
        let randomColor =
            filteredColorGrid[
                Math.floor(Math.random() * filteredColorGrid.length)
            ];
        setTheme(colors[randomColor]);
    };

    const themeProps = {
        currentTheme: theme,
        changeTheme: onThemeClick,
        myExperience,
    };

    const about = {
        ...homeObjOne,
        ...themeProps,
    };

    const experience = {
        ...homeObjThree,
        ...themeProps,
    };

    const skills = {
        ...homeObjFour,
        ...themeProps,
    };

    return (
        <>
            <Sidebar
                currentTheme={theme}
                onThemeClick={() => onThemeClick()}
                isOpen={isOpen}
                toggle={toggle}
            />
            <Navbar
                currentTheme={theme}
                toggle={toggle}
                onThemeClick={() => onThemeClick()}
            />
            <HeroSection {...themeProps} />
            <InfoSection {...about} />
            <InfoSection {...experience} />
            <InfoSection {...skills} />
            <Hobbies currentTheme={theme} />
            <ContactMe currentTheme={theme} />
            <Footer currentTheme={theme} />
        </>
    );
};

export default Home;

import React from "react";

import ExperienceIcons from "./ExperienceIcons.jsx";
import { ExpIcons, SkillsStack, SkillsHeading, Skills } from "./InfoElements";

const SkillsSection = ({ currentTheme }) => {
    return (
        <SkillsStack themecolor={currentTheme}>
            <Skills themecolor={currentTheme}>
                <SkillsHeading themecolor={currentTheme}>
                    Key Skills
                </SkillsHeading>
                <ExpIcons skills themecolor={currentTheme}>
                    <ExperienceIcons skill='erlang' />
                    <ExperienceIcons skill='react' />
                    <ExperienceIcons skill='javascript' />
                    <ExperienceIcons skill='html' />
                    <ExperienceIcons skill='typescript' />
                </ExpIcons>
            </Skills>
            <Skills themecolor={currentTheme}>
                <SkillsHeading themecolor={currentTheme}>
                    Database
                </SkillsHeading>
                <ExpIcons skills themecolor={currentTheme}>
                    <ExperienceIcons skill='Mnesia' />
                    <ExperienceIcons skill='CouchDB' />
                    <ExperienceIcons skill='mysql' />
                </ExpIcons>
            </Skills>
            <Skills themecolor={currentTheme}>
                <SkillsHeading>Others</SkillsHeading>
                <ExpIcons skills themecolor={currentTheme}>
                    <ExperienceIcons skill='git' />
                    <ExperienceIcons skill='jenkins' />
                    <ExperienceIcons skill='nginix' />
                    <ExperienceIcons skill='sip' />
                </ExpIcons>
            </Skills>
        </SkillsStack>
    );
};

export default SkillsSection;

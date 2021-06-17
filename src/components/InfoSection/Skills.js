import React from 'react'
import {
    FaReact,
    FaErlang,
    FaGitSquare,
    FaHtml5,
    FaJenkins
} from 'react-icons/fa';
import {
    MdDialerSip
} from 'react-icons/md';
import {
    SiNginx,
    SiJavascript,
    SiMysql
} from 'react-icons/si';



import {
    ExpIcons,
    ExpIconLink,
    SkillsStack,
    SkillsHeading,
    Skills
} from './InfoElements';

const SkillsSection = () => {
    return (
        <>
        <SkillsStack>
            <Skills>
                <SkillsHeading>Key Skills</SkillsHeading>
                <ExpIcons skills>
                    <ExpIconLink aria-label="Erlang" skills> <FaErlang /> </ExpIconLink>
                    <ExpIconLink aria-label="React" skills> <FaReact /> </ExpIconLink>
                    <ExpIconLink aria-label="SiJavascript" skills> <SiJavascript /> </ExpIconLink>
                    <ExpIconLink aria-label="FaHtml5" skills> <FaHtml5 /> </ExpIconLink>
                    <ExpIconLink aria-label="MdDialerSip" skills> REST APIs</ExpIconLink>
                    <ExpIconLink aria-label="MdDialerSip" skills> Cowboy</ExpIconLink>
                </ExpIcons>
            </Skills>
            <Skills>
                <SkillsHeading>Database</SkillsHeading>
                <ExpIcons skills>
                    <ExpIconLink aria-label="Erlang" skills> Mnesia </ExpIconLink>
                    <ExpIconLink aria-label="React" skills> CouchDB </ExpIconLink>
                    <ExpIconLink aria-label="SiMysql" skills> <SiMysql /> </ExpIconLink>
                </ExpIcons>
            </Skills>
            <Skills>
                <SkillsHeading>Others</SkillsHeading>
                <ExpIcons skills>
                    <ExpIconLink aria-label="FaGitSquare"> <FaGitSquare /> </ExpIconLink>
                    <ExpIconLink aria-label="FaJenkins"> <FaJenkins /> </ExpIconLink>
                    <ExpIconLink aria-label="SiNginx"> <SiNginx /> </ExpIconLink>
                    <ExpIconLink aria-label="MdDialerSip"> <MdDialerSip /> </ExpIconLink>
                </ExpIcons>
            </Skills>
        </SkillsStack>
    </>
    )
}

export default SkillsSection

import React from "react";
import { ExpIconLink } from "./InfoElements";
import {
    FaReact,
    FaErlang,
    FaGitSquare,
    FaHtml5,
    FaJenkins,
} from "react-icons/fa";
import { MdDialerSip } from "react-icons/md";
import { SiNginx, SiJavascript, SiMysql } from "react-icons/si";
import Tooltip from "@material-ui/core/Tooltip";

const ExperienceIcons = (props) => {
    const { skill } = props;
    let expIcon;
    switch (skill) {
        case "react":
            expIcon = <FaReact />;
            break;
        case "html":
            expIcon = <FaHtml5 />;
            break;
        case "javascript":
            expIcon = <SiJavascript />;
            break;
        case "mysql":
            expIcon = <SiMysql />;
            break;
        case "jenkins":
            expIcon = <FaJenkins />;
            break;
        case "git":
            expIcon = <FaGitSquare />;
            break;
        case "nginix":
            expIcon = <SiNginx />;
            break;
        case "sip":
            expIcon = <MdDialerSip />;
            break;
        default:
            expIcon = <FaErlang />;
    }

    return (
        <Tooltip title={skill}>
            <ExpIconLink aria-label={skill}>{expIcon} </ExpIconLink>
        </Tooltip>
    );
};

export default ExperienceIcons;

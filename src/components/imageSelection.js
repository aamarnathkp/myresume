import GreenAbout from "../images/green/about.svg";
import GreenSkills from "../images/green/skills.svg";
import GreenContact from "../images/green/contact.svg";
import GreenHobbie1 from "../images/green/hobbie1.svg";
import GreenHobbie2 from "../images/green/hobbie2.svg";
import GreenHobbie3 from "../images/green/hobbie3.svg";
import YellowAbout from "../images/yellow/about.svg";
import YellowSkills from "../images/yellow/skills.svg";
import YellowContact from "../images/yellow/contact.svg";
import YellowHobbie1 from "../images/yellow/hobbie1.svg";
import YellowHobbie2 from "../images/yellow/hobbie2.svg";
import YellowHobbie3 from "../images/yellow/hobbie3.svg";
import RedAbout from "../images/red/about.svg";
import RedSkills from "../images/red/skills.svg";
import RedContact from "../images/red/contact.svg";
import RedHobbie1 from "../images/red/hobbie1.svg";
import RedHobbie2 from "../images/red/hobbie2.svg";
import RedHobbie3 from "../images/red/hobbie3.svg";

const yellowsectionImage = (section) => {
    let theme = null;
    switch (section) {
        case "about":
            theme = YellowAbout;
            break;
        case "skills":
            theme = YellowSkills;
            break;
        case "contact":
            theme = YellowContact;
            break;
        case "hobbie1":
            theme = YellowHobbie1;
            break;
        case "hobbie2":
            theme = YellowHobbie2;
            break;
        case "hobbie3":
            theme = YellowHobbie3;
            break;
        default:
            theme = YellowAbout;
            break;
    }
    return theme;
};

const redsectionImage = (section) => {
    let theme = null;
    switch (section) {
        case "about":
            theme = RedAbout;
            break;
        case "skills":
            theme = RedSkills;
            break;
        case "contact":
            theme = RedContact;
            break;
        case "hobbie1":
            theme = RedHobbie1;
            break;
        case "hobbie2":
            theme = RedHobbie2;
            break;
        case "hobbie3":
            theme = RedHobbie3;
            break;
        default:
            theme = RedAbout;
            break;
    }
    return theme;
};

const greensectionImage = (section) => {
    let theme = null;
    switch (section) {
        case "about":
            theme = GreenAbout;
            break;
        case "skills":
            theme = GreenSkills;
            break;
        case "contact":
            theme = GreenContact;
            break;
        case "hobbie1":
            theme = GreenHobbie1;
            break;
        case "hobbie2":
            theme = GreenHobbie2;
            break;
        case "hobbie3":
            theme = GreenHobbie3;
            break;
        default:
            theme = GreenAbout;
            break;
    }
    return theme;
};

export const imageSelector = (themecolor, section) => {
    let theme = null;
    switch (themecolor) {
        case "#e6b800":
            theme = yellowsectionImage(section);
            break;
        case "#e44f4f":
            theme = redsectionImage(section);
            break;
        default:
            theme = greensectionImage(section);
            break;
    }
    return theme;
};

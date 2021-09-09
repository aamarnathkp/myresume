import AboutME from '../../images/aboutme1.svg';
import Discover from '../../images/discover.svg';
import Experience from '../../images/skills.svg';
import Skills from '../../images/skills2.svg';
import Contact from '../../images/Contact.svg';

export const homeObjOne = {
    id : 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine : 'About Me',
    headLine: 'Self-motivated developer with 4+ years of experience in software development',
    description :`that includes professional involvement in
    React JS on identifying web-based user interactions along with designing and implementing highly responsive user interface
    components by deploying React concepts. Proficient in translating designs into high-quality code through JS and React workflows.
    And as full time backend Erlang developer`,
    buttonLabel: 'Download Resume',
    showButton: true,
    imgStart: false,
    img: AboutME,//require('../../images/aboutme2.svg'),
    alt: 'AboutME',
    dark: false,
    primary: false,
    darkText: true,
    type : 'about'
};

export const homeObjTwo = {
    id : 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine : 'Discover',
    headLine: 'Self-motivated developer with 4+ years of experience in software development',
    description :`that includes of professional involvement in
    React JS on identifying web-based user interactions along with designing and implementing highly responsive user interface
    components by deploying React concepts. Proficient in translating designs into high-quality code through JS and React workflows.`,
    buttonLabel: 'Download Resume',
    imgStart: true,
    img: Discover,
    alt: 'Discover',
    dark: false,
    primary: false,
    darkText: true,
    type: 'discover'
}

export const homeObjThree = {
    id : 'experience',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine : 'Work Experience',
    imgStart: false,
    img: Experience,
    alt: 'Experience',
    timeline:true,
    dark: true,
    primary: true,
    darkText: false,
    type : 'experience'
};

export const homeObjFour = {
    id : 'skills',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine : 'Skills',
    headLine: 'Self-motivated developer with 4+ years of experience in software development',
    description :`that includes of professional involvement in
    React JS on identifying web-based user interactions along with designing and implementing highly responsive user interface
    components by deploying React concepts. Proficient in translating designs into high-quality code through JS and React workflows.`,
    buttonLabel: 'Download Resume',
    skills: true,
    imgStart: true,
    img: Skills,
    alt: 'Skills',
    dark: false,
    primary: false,
    darkText: true,
    type : 'skills'
};

export const homeObjFive = {
    id : 'contact',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine : 'Contact',
    headLine:'',
    description :`aamarnathkp@gmail.com`,
    buttonLabel: 'Download Resume',
    showButton: true,
    imgStart: true,
    img: Contact,
    alt: 'Contact',
    dark: false,
    primary: false,
    darkText: true,
    type: 'contact'
};

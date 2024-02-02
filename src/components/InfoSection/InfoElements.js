import styled from "styled-components";

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: ${({ type }) => (type === "experience" ? "100%" : "100vh")};
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width: 768px) {
        height: auto;
    }
`;

export const InfoRow = styled.div`
    display: grid;
    grid-template-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) =>
        imgStart ? `'col2 col1'` : `'col1 col2'`};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) =>
            imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

    &:hover {
        transform: ${({ id }) =>
            id === "experience" ? "none" : "scale(1.02)"};
        transition: all 0.2s ease-in-out;
    }
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: ${({ themecolor }) =>
        themecolor ? themecolor : "#01BF71"}; //#01bf71;
    font-size: ${({ skills }) => (skills ? "32px" : "16px")}; //16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    background: #010606;
    padding: 0.5rem 0 0.5rem 1rem;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;
export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

export const Button = styled.a`
    border-radius: 50px;
    background: ${({ primary, themecolor }) =>
        primary ? (themecolor ? themecolor : "#010606") : "#010606"};
    white-space: nowrap;
    padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
    color: ${({ dark }) => (dark ? "#010606" : "black")};
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
    outline: none;
    border: none;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: ${({ themecolor }) => themecolor};
        background: ${({ primary, themecolor }) =>
            primary ? "black" : themecolor ? themecolor : "#01BF71"};
    }
    @media (max-width: 480px) {
        padding: 12px 20px;
    }
`;

export const WorkExperience = styled.div`
    height: 800px;
`;

export const ExpIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 0 0.5rem 1rem 0.5rem; */
    gap: 1rem;
    /* height: 100%;
    width: 100%; */
    color: ${({ themecolor }) =>
        themecolor ? themecolor : "#01BF71"}; //#01BF71;
    /* background-color: black; */

    @media (max-width: 780px) {
        display: ${({ skills }) => (skills ? "show" : "none")}; //none;
    }
    @media (max-width: 480px) {
        display: ${({ skills }) => (skills ? "show" : "none")}; //none;
    }
`;

export const ExpIconLink = styled.a`
    padding: 5px;
    font-size: 20px;
    background-color: #3f3d56;
    border-radius: 0.2rem;

    @media (max-width: 780px) {
        font-size: ${({ skills }) => (skills ? "18px" : "20px")}; //none;
    }
    @media (max-width: 480px) {
        font-size: ${({ skills }) => (skills ? "16px" : "20px")}; //none;
    }

    &:hover {
        transform: scale(1.35);
        transition: all 0.2s ease-in-out;
    }
`;

export const SkillsStack = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;
    align-content: space-between;
    height: 350px;
    width: 550px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 8px;
    margin: 10px;
    gap: 0.25rem;
    background-color: ${({ themecolor }) => `${themecolor}20`};

    @media (max-width: 780px) {
        height: 470px;
        width: 480px;
    }
    @media (max-width: 480px) {
        height: 340px;
        width: 260px;
        margin: 1px;
    }
`;

export const SkillsHeading = styled.h2`
    color: black;
    text-align: center;
    width: 8rem;
`;

export const Skills = styled.div`
    color: ${({ themecolor }) =>
        themecolor ? themecolor : "#01BF71"}; //#01bf71;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${({ themecolor }) =>
        themecolor ? themecolor : "#01BF71"};
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    gap: 1rem;

    @media (max-width: 780px) {
        flex-direction: column;
    }
    @media (max-width: 480px) {
        flex-direction: column;
    }
`;

export const HeadingH1 = styled.h1`
    font-size: 2.5rem;
    color: ${({ themecolor }) =>
        themecolor ? themecolor : "#01BF71"}; //#01bf71;
    text-align: center;
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

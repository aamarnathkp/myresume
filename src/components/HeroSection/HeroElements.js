import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;

    :before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
                180deg,
                rgb(0, 0, 0, 0.2) 0%,
                rgb(0, 0, 0, 0.6) 100%
            ),
            linear-gradient(180deg, rgb(0, 0, 0, 0.2) 0%, transparent 100%);
        z-index: 2;
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ themecolor }) => `${themecolor}20`};
    border-radius: 2rem;
    padding: 1rem 1.5rem 1rem 2rem;
`;

export const HeroIntro = styled.h3`
    color: #f7f7f7;
    text-align: center;
    margin-bottom: 1rem;
`;

export const HeroH1 = styled.h1`
    color: ${({ themecolor }) => themecolor};
    font-size: 48px;
    text-align: center;
    transition: all 0.2s ease-in-out;
    /* text-shadow: ${({ themecolor }) => `0.5px 0.5px 2px white`}; */
    background: #00000095;
    border-radius: 1rem;
    padding: 0.25rem 2rem 0.25rem 2rem;
    border-color: ${({ themecolor }) => themecolor};
    /* border: solid; */

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }

    &:hover {
        @media screen and (max-width: 480px) {
            transform: scale(1.3);
        }
        transform: scale(2.02);
        border: solid;
        border-color: ${({ themecolor }) => themecolor};
    }
`;

export const HeroP = styled.p`
    margin-top: 24px;
    font-size: 24px;
    text-align: center;
    padding: 1rem;
    max-width: 600px;
    color: ${({ themecolor }) => themecolor};
    background: #00000095;
    border-radius: 1rem;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* text-align:center; */
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;
export const SocialIcons = styled.div`
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;

    &:hover {
        transform: scale(2.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

import styled from "styled-components";

export const ServicesContainer = styled.div`
    height: 100%;
    padding: 6rem 0 6rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: ${({ currentTheme }) => `${currentTheme}75`};
    gap: 3rem;

    @media screen and (max-width: 768px) {
        height: auto;
    }

    /* @media screen and (max-width: 480px) {
        height: auto;
    }  */
`;

export const ServicesWrapper = styled.div`
    max-width: auto;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    /* max-height: 340px; */
    height: 320px;
    padding: 30px;
    box-shadow: 0 1px 3px rgb(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ServicesIcon = styled.img`
    height: 50%;
    width: auto;
    margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #3f3d56;
    /* margin-bottom: 64px; */

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`;

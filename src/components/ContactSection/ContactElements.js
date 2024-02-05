import styled from "styled-components";

export const ContactContainer = styled.div`
    position: "relative";
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ currentTheme }) => `${currentTheme}20`};

    @media screen and (max-width: 768px) {
        height: auto;
        /* padding: 6rem 0 6rem 0; */
    }

    @media screen and (max-width: 480px) {
        height: auto;
        padding: 6rem 0 6rem 0;
    }
`;

export const ContactImageContainer = styled.div`
    padding: 10px;
    margin: 20px;
    height: 60%;
    width: 30%;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }

    @media (max-width: 500px) {
        display: none;
    }
`;

export const ContactImage = styled.img`
    width: 100%;
    height: 100%;
`;

export const ContactFormContainer = styled.div`
    padding: 5px;
    margin: 20px;
    background: ${({ theme }) => theme};
    width: 70%;
    height: 60%;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }
`;

export const FormSuccess = styled.div`
    border-radius: 8px;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    border: 2px solid #fff;
`;

export const RatingArea = styled.div`
    background: #fff;
`;

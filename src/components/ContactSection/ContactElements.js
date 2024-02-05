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

    @media (max-width: 600px) {
        display: none;
    }
`;

export const ContactImage = styled.img`
    width: 100%;
    height: 100%;
`;

export const ContactFormContainer = styled.div`
    padding: 0.5rem;
    margin: 20px;
    width: 50%;
    height: 60%;
    background: ${({ theme }) => "#f7f7f7"};
    border-radius: 2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;

export const FormSuccess = styled.div`
    border-radius: 2rem;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    border: 2px solid #fff;
    background: ${({ currentTheme }) => `${currentTheme}25`};
`;

export const RatingArea = styled.div`
    background: #fff;
    height: 100%;
    width: 100%;
`;

export const UserForm = styled.form`
    border-radius: 2rem;
    display: flex;
    width: 100%;
    height: 95%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    background: ${({ theme }) => `${theme}99`};
    color: ${({ theme }) => theme};
`;

export const ContactFormH3 = styled.h3`
    text-align: center;
    padding: 0.2rem 0 0.2rem 0;
    color: ${({ theme }) => theme};
`;

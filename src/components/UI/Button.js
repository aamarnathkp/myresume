import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
    color: #fff;
    background-color: ${({ active, themecolor }) =>
        active ? themecolor : "grey"};
    height: 35px;
    width: 120px;
    border-radius: 8px;
    border: none;
    margin: 5px;
    text-align: center;
    font-size: bold;
    box-shadow: ${({ active }) =>
        active
            ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            : null};

    &:hover {
        cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
        /* transform: scale(1.06);
    transition: all 0.2s ease-in-out; */
        box-shadow: ${({ disabled }) =>
            disabled
                ? null
                : "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"};
    }
    &:active {
        color: red;
        transform: translateY(4px);
        background-color: #0072b9;
    }

    @media screen and (max-width: 768px) {
        font-size: xx-small;
        height: 25px;
        width: 55px;
    }
`;

export const LinkStyle = styled.a`
    ${MyButton}
`;

const Button = (props) => {
    return (
        <MyButton
            onClick={props.onClick}
            themecolor={props.themecolor}
            disabled={props.disabled ? true : false}
            active={props.active ? true : false}
            type={props.type}>
            {props.children}
        </MyButton>
    );
};

export default Button;

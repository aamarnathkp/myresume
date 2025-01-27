import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({ themecolor }) => (themecolor ? themecolor : "#01BF71")};
    white-space: nowrap;
    padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
    color: ${({ dark }) => (dark ? "#010606" : "#fff")};
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    border-style: solid;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? "black" : "#01BF71")};
        border-style: solid;
        border-color: ${({ themecolor }) => themecolor};
        color: ${({ themecolor }) => themecolor};
    }
`;

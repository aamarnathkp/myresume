import styled from "styled-components";

export const LogoImg = styled.img`
    width: ${({ width }) => (width ? width : "100px")};
    height: auto;
`;

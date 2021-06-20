import styled from "styled-components";

export const ModalWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-content: space-around;
    height: 100%;
    width: 100%;
    /* margin-top: ${({hobbie}) => (hobbie === 'photography' ? '200px' : '100px')};//100px;//200px;
    margin-left: ${({hobbie}) => (hobbie === 'photography' ? '500px' : '660px')};//660px;//500px;
    height: ${({hobbie}) => (hobbie === 'photography' ? '60%' : '86%')};//86%;//60%;
    width: ${({hobbie}) => (hobbie === 'photography' ? '50%' : '30%')};//30%;//50%;
    border-radius: 8px;
    border-style: none;
    background-color: #fff; */

`

export const ModalCloseIcon = styled.div`
    height: 45px;
    width: 45px;
    border-style: 45px;
`

// we use them across the website 

import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle `
   * {
       box-sizing: border-box;
       margin: 0;
       padding: 0;
   }
`;

export const Container = styled.div `
z-index: 1,
width: 100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding-right: 50px;
padding-left: 50px;

@media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
}
`;

export const Button = styled.div `
border-radius: 4px;
background: ${({primary}) => (primary ? '#33001b' : '#2F0743')}
white-space: nowrap;
padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
color: #fff;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;

&:hover {
    tranistion: all 0.3s ease-out;
    background: #fff;
    background: ${({primary}) => (primary ? '#2F0743' : '#33001b')}
}

@media screen and (max-width: 960px) {
    width: 100%;
}
`;




export default GlobalStyles;
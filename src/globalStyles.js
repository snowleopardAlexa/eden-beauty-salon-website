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
background: #BB377D;
background-color: ${({primary}) => (primary ? '#BB377D' : '#833ab4')}
white-space: nowrap;
padding: ${({big}) => (big ? '12px 64px' : '12px 20px')};
color: #fff;
font-size: ${({fontBig}) => (fontBig ? '30px' : '20px')};
font-family: 'Cookie', cursive;
outline: none;
border: none;
cursor: pointer;
letter-spacing: 3px;
text-align: center;

&:hover {
    tranistion: all 0.3s ease-out;
    background: #fff;
    background-color: ${({primary}) => (primary ? '#833ab4' : '#BB377D')}
}

@media screen and (max-width: 960px) {
    width: 100%;
}
`;




export default GlobalStyles;
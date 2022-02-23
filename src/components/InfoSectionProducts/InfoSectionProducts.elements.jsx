import styled from 'styled-components';

export const ContainerTitle = styled.div `
  text-align: center;
  font-size: 3rem;
  font-family: 'Cinzel', serif;
  font-weight: bold;
  padding: 50px;

  @media screen and (max-width: 640px) {
   font-size: 1rem;
 }

 @media screen and (max-width: 768px) {
   font-size: 1.5rem;
 }

 

`;

export const ProductsSec = styled.div `
   
`;

export const ProductsRow = styled.div `
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;
   width: 100%;
`;

export const ProductColumn = styled.div `
   display: flex;
   flex-direction: column;
   flex-basis: 100%;
   flex: 1;
`;

export const ProductsTextWrapper = styled.div `
   max-width: 540px;
   color: black;
   font-family: 'Cinzel', serif;
   text-align: center;
   line-height: 50px;
   margin-top: 100px;

   @media screen and (max-width: 768px) {
      margin-top: 0px;
      line-height: 22px;
    }
`;

export const ProductsTitle = styled.div `
   font-size: 2rem;

   @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
`;

export const ProductsHeading = styled.div `
   font-size: 1.5rem;

   @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
`;

export const ProductsSubtitle = styled.div `
   font-size: 1.2rem;

   @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
`;

export const ProductsImgColumn = styled.div `
   width: 100%;
   height: 100%;
`;

export const ProductImgWrapper = styled.div `
   width: 100%;
   height: 100%;
`;

export const ProductPrice = styled.h1 `
@media screen and (max-width: 768px) {
   font-size: 1rem;
 }
`;

export const Img = styled.img `
  max-width: 100%;
  max-height: 400px;
`;




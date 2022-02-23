import styled from 'styled-components';
import { device } from '../../responsiveView';

export const ContainerTitle = styled.div `
  text-align: center;
  font-family: 'Cinzel', serif;
  font-weight: bold;
  padding: 50px; 

@media ${device.mobileM} {
   font-size: 1.5rem;
} 

@media ${device.tablet} {
   font-size: 2rem;
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

   @media ${device.mobileM} {
      line-height: 25px;
      margin-top: 0px;
   } 

   @media ${device.tablet} {
      margin-top: 50px;
      line-height: 40px;
   }
`;

export const ProductsTitle = styled.div `
   font-size: 2rem;

   @media ${device.mobileM} {
      font-size: 1.2rem;
   } 

   @media ${device.tablet} {
      font-size: 2rem;
   }
`;

export const ProductsHeading = styled.div `
   font-size: 1.5rem;

   @media ${device.mobileM} {
      font-size: 1rem;
   } 

   @media ${device.tablet} {
      font-size: 1.5rem;
   }
`;

export const ProductsSubtitle = styled.div `
   font-size: 1.2rem;

   @media ${device.mobileM} {
      font-size: 1rem;
   } 

   @media ${device.tablet} {
      font-size: 1.5rem;
   }
`;

export const ProductPrice = styled.h1 `
   @media ${device.mobileM} {
     font-size: 1rem;
   } 

   @media ${device.tablet} {
     font-size: 1.5rem;
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

export const Img = styled.img `
  max-width: 100%;
  max-height: 400px;
`;




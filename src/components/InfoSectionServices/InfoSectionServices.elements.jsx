import styled from 'styled-components';

export const TableContainer = styled.div `
width: 100%;
height: 100%;
margin-top: -20px;
`;

export const Table = styled.div `
width: 100%;
`;

export const TableTitle = styled.h1 `
font-size: 3.5rem;
margin-top: 20px;
padding: 15px;
font-family: 'Dancing Script', cursive;
text-align: center;
background: #AA076B;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #AA076B, #61045F);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #AA076B, #61045F); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
color: #fff;
`;

export const TableSubtitle = styled.h3 `
font-size: 1.2rem;
padding: 15px;
font-family: 'Cinzel', serif;
text-align: center;
background: #8E2DE2;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #4A00E0, #8E2DE2);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #4A00E0, #8E2DE2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

color: #fff;
`;

export const TableRow = styled.div `
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 480px) {
  flex-direction: column;
}

@media screen and (max-width: 820px) {
  flex-direction: column;
}
`;

export const TableHead = styled.div `
font-family: 'Playfair Display', serif;
padding: 20px;
background: #5f2c82;
color: #fff;
width: 100%;
text-align: center;
font-size: 1.2rem;
`;

export const TableBody = styled.div `
width: 100%;
`;

export const TableDataCell = styled.div `
width: 100%;
padding: 20px;
border: 1px solid #F2F2F2;
text-align: center;
font-family: 'Cinzel', serif;
font-size: 1rem;
font-weight: ${({ fontWeight }) => (fontWeight ? '700' : 'none')};
`;






import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';

export const Intro = styled.div `
  display: flex;
  height: 100vh;
`;

export const IntroLeft = styled.div `
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eef2f3;
`;

export const IntroRight = styled.div `
  flex: 1;
  position: relative;
`;

export const IntroLeftWrapper = styled.div `
  padding: 50px;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleIntro = styled.h1 `
  font-size: 3rem;
  font-family: 'Cinzel', serif;
`;

export const SubtitleIntro = styled.h3 `
  font-size: 1.7rem;
  font-family: 'Dancing Script', cursive;
`;

export const DescIntroText = styled.p `
  font-size: 1.2rem;
  font-family: 'Playfair Display', serif;
`;

export const IntroImgWrapper = styled.div `
 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Img = styled.img `
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export const SocialIconText = styled.h2`
  color: #fff;
  font-size: 30px;
  margin-right: 10px;
`;

export const SocialIcon = styled(FaInstagram)`
`;


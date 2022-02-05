import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';

export const Intro = styled.div `
  display: flex;
  height: 100vh;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }

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

  @media screen and (max-width: 480px) {
    padding: 0px;
  }

  @media screen and (max-width: 820px) {
    padding: 0px;
  }

`;

export const TitleIntro = styled.h1 `
  font-size: 3rem;
  font-family: 'Cinzel', serif;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    text-align: center;
  }

  @media screen and (max-width: 820px) {
    font-size: 2.5rem;
    text-align: center;
  }

`;

export const SubtitleIntro = styled.h3 `
  font-size: 1.7rem;
  font-family: 'Dancing Script', cursive;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    margin-top: 20px;
    text-align: center;
  }

  @media screen and (max-width: 820px) {
    font-size: 1.7rem;
    margin-top: 20px;
    text-align: center;
  }

`;

export const DescIntroText = styled.p `
  font-size: 1.2rem;
  font-family: 'Playfair Display', serif;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
    margin: 20px 20px;
    text-align: center;
  }

  @media screen and (max-width: 820px) {
    font-size: 1.5rem;
    margin: 20px 20px;
    text-align: center;
  }
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

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 820px) {
    font-size: 1.5rem;
  }

`;

export const SocialIcon = styled(FaInstagram)`
`;


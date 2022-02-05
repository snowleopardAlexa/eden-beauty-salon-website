import {
  Intro,
  IntroLeft,
  IntroLeftWrapper,
  TitleIntro,
  SubtitleIntro,
  DescIntroText,
  SocialIconLink,
  SocialIconText,
  IntroRight,
  IntroImgWrapper,
  Img,
} from "./InfoSectionAbout.elements";
import { Button } from "../../globalStyles";
import { FaInstagram } from 'react-icons/fa';
//import { Link } from "react-router-dom";

const InfoSectionAbout = ({ img, alt }) => {
  return (
    <Intro>
      <IntroLeft>
        <IntroLeftWrapper>
          <TitleIntro>Lara Jameson</TitleIntro>
          <SubtitleIntro>Founder at Eden Beauty Salon</SubtitleIntro>
          <DescIntroText>Worldwide Hairdresser</DescIntroText>
          <Button>
          <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
            <SocialIconText>
              Follow Lara on 
            </SocialIconText>
            <FaInstagram />
          </SocialIconLink>
          </Button>
        </IntroLeftWrapper>
      </IntroLeft>
      <IntroRight>
        <IntroImgWrapper>
         <Img src={img} alt={alt} />
        </IntroImgWrapper>
      </IntroRight>
    </Intro>
  );
};

export default InfoSectionAbout;

import {
  Intro,
  IntroLeft,
  IntroLeftWrapper,
  TitleIntro,
  SubtitleIntro,
  DescIntroText,
  IntroRight,
  IntroImgWrapper,
  Img,
} from "./InfoSectionAbout.elements";
import { Container, Button } from "../../globalStyles";
//import { Link } from "react-router-dom";

const InfoSectionAbout = () => {
  return (
    <Intro>
      <IntroLeft>
        <IntroLeftWrapper>
          <TitleIntro></TitleIntro>
          <SubtitleIntro></SubtitleIntro>
          <DescIntroText></DescIntroText>
          <Button>Send Message</Button>
        </IntroLeftWrapper>
      </IntroLeft>
      <IntroRight>
        <IntroImgWrapper>
          <Img></Img>
        </IntroImgWrapper>
      </IntroRight>
    </Intro>
  );
};

export default InfoSectionAbout;

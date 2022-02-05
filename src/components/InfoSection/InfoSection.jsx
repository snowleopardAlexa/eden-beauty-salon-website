import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./InfoSection.elements";
import { Container, Button } from "../../globalStyles";
import { Link } from "react-router-dom";

const InfoSection = ({
  lightBg,
  imgStart,
  lightTopLine,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  buttonLabel,
  primary,
  img, 
  alt,
  start,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc>{lightTextDesc}</Subtitle>
                <Subtitle>
                  <Link to="/sign-up" style={{textDecoration: 'none'}}>
                    <Button fontBig primary={primary}>
                      {buttonLabel}
                    </Button>
                  </Link>
                </Subtitle>
              </TextWrapper>
            </InfoColumn>
            <ImgWrapper start={start}>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;

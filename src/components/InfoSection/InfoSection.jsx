import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
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
                  <Link to="/sign-up">
                    <Button big fontBig primary={primary}>
                      {buttonLabel}
                    </Button>
                  </Link>
                </Subtitle>
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;

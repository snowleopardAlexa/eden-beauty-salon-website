import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
  } from "./InfoSectionProducts.elements";
  import { Container, Button } from "../../globalStyles";
  import { Link } from "react-router-dom";
  
  const InfoSection = ({
    btnBg,
    lightBg,
    topLine,
    lightTopLine,
    lightText,
    lightTextDesc,
    color,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    start,
    imgStart,
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
                  <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                    <Link to="/sign-up" style={{textDecoration: 'none'}}>
                      <Button 
                        big 
                        fontBig
                         btnBg={btnBg}
                         color={color}
                      >
                        {buttonLabel}
                      </Button>
                    </Link>
                </TextWrapper>
              </InfoColumn>
              <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
              </InfoColumn>
            </InfoRow>
          </Container>
        </InfoSec>
      </>
    );
  };
  
  export default InfoSection;
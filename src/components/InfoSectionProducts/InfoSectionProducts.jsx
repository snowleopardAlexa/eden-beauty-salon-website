import {
  ProductsSec,
  ProductsRow,
  InfoColumn,
  ProductsTextWrapper,
  ProductsTitle,
  ProductsHeading,
  ProductsSubtitle,
  ProductsColumn,
  Container,
  Link,
  Button,
  ProductImgWrapper,
  Img,
} from "./InfoSectionProducts.elements";

const InfoSectionProducts = ({
  img,
  alt,
  color,
  start,
  imgStart,
  topLine,
  headline,
  description,
  btnBg,
  buttonLabel,
}) => {
  return (
    <>
      <>
        <ProductsSec>
          <Container>
            <ProductsRow imgStart={imgStart}>
              <ProductsColumn>
                <ProductsTextWrapper>
                  <ProductsTitle>{topLine}</ProductsTitle>
                  <ProductsHeading>{headline}</ProductsHeading>
                  <ProductsSubtitle>{description}</ProductsSubtitle>
                  <Link to="" style={{ textDecoration: "none" }}>
                    <Button big fontBig btnBg={btnBg} color={color}>
                      {buttonLabel}
                    </Button>
                  </Link>
                </ProductsTextWrapper>
              </ProductsColumn>
              <InfoColumn>
                <ProductImgWrapper start={start}>
                  <Img src={img} alt={alt} />
                </ProductImgWrapper>
              </InfoColumn>
            </ProductsRow>
          </Container>
        </ProductsSec>
      </>
    </>
  );
};

export default InfoSectionProducts;
